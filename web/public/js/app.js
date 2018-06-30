window.addEventListener('load', () => {
    const el = $('#app');

    // Compile Handlebar Templates
    const errorTemplate = Handlebars.compile($('#error-template').html());
    const universitiesTemplate = Handlebars.compile($('#universities-template').html());
    const ratingsTemplate = Handlebars.compile($('#ratings-template').html());
    const homeTemplate = Handlebars.compile($('#home-template').html());

    // Router Declaration
    const router = new Router({
        mode: 'history',
        page404: (path) => {
            const html = errorTemplate({
                color: 'yellow',
                title: 'Error 404 - Page NOT Found!',
                message: `The path '/${path}' does not exist on this site`,
            });
            el.html(html);
        },
    });

    // Instantiate api handler
    const api = axios.create({
        baseURL: 'http://localhost:3000/api',
        timeout: 5000,
    });

// Display Error Banner
    const showError = (error) => {
        const {title, message} = error.response.data;
        const html = errorTemplate({color: 'red', title, message});
        el.html(html);
    };

    router.add('/', async () => {
        // Display loader first
        let html = homeTemplate();
        el.html(html);
        try {
            const responseNews = await api.get('/news');
            const news = responseNews.data;

            console.log(news);
            html = homeTemplate({news});
            el.html(html);
        } catch (error) {
            showError(error);
        } finally {
            // Remove loader status
            $('.loading').removeClass('loading');
        }
    });

    router.add('/ratings', () => {
        let html = ratingsTemplate();
        el.html(html);
    });

    router.add('/universities', async () => {
        // Display loader first
        let html = universitiesTemplate();
        el.html(html);
        try {
            const responseUniversities = await api.get('/universities');
            const universities = responseUniversities.data;
            console.log(universities);
            html = universitiesTemplate({universities});
            el.html(html);
        } catch (error) {
            showError(error);
        } finally {
            // Remove loader status
            $('.loading').removeClass('loading');
        }
    });


    // Navigate app to current url
    router.navigateTo(window.location.pathname);

    // Highlight Active Menu on Refresh/Page Reload
    const link = $(`a[href$='${window.location.pathname}']`);
    link.addClass('active');

    $('a').on('click', (event) => {
        // Block browser page load
        event.preventDefault();

        // Highlight Active Menu on Click
        const target = $(event.target);
        $('.item').removeClass('active');
        target.addClass('active');

        // Navigate to clicked url
        const href = target.attr('href');
        const path = href.substr(href.lastIndexOf('/'));
        router.navigateTo(path);
    });
});