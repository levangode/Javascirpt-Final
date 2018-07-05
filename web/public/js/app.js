const router = undefined;
window.addEventListener('load', () => {
    const el = document.getElementById("app");

    // Compile Handlebar Templates
    const errorTemplate = Handlebars.compile(document.getElementById('error-template').innerHTML);
    const universitiesTemplate = Handlebars.compile(document.getElementById('universities-template').innerHTML);
    const ratingsTemplate = Handlebars.compile(document.getElementById('ratings-template').innerHTML);
    const homeTemplate = Handlebars.compile(document.getElementById('home-template').innerHTML);
    const universityProfileTemplate = Handlebars.compile(document.getElementById('university-profile-template').innerHTML);
    const universityEventsTemplate = Handlebars.compile(document.getElementById('university-events-template').innerHTML);
    const universityNewsTemplate = Handlebars.compile(document.getElementById('university-news-template').innerHTML);
    const universityFacultiesTemplate = Handlebars.compile(document.getElementById('university-faculties-template').innerHTML);
    const universityFaqTemplate = Handlebars.compile(document.getElementById('university-faq-template').innerHTML);
    const universityAboutTemplate = Handlebars.compile(document.getElementById('university-about-template').innerHTML);

    // Router Declaration
    this.router = new Router({
        mode: 'history',
        page404: (path) => {
            const html = errorTemplate({
                color: 'yellow',
                title: 'Error 404 - Page NOT Found!',
                message: `The path '/${path}' does not exist on this site`,
            });
            el.innerHTML = html;
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
        el.innerHTML = html;
    };


    this.router.add('/', async () => {
        // Display loader first
        let html = homeTemplate();
        el.innerHTML = html;
        try {
            const responseNews = await api.get('/news');
            const news = responseNews.data;

            console.log(news);
            html = homeTemplate({news});
            el.innerHTML = html;
        } catch (error) {
            showError(error);
        } finally {
            removeLoadingClass();
        }
    });

    this.router.add('/ratings', () => {
        let html = ratingsTemplate();
        el.innerHTML = html;
    });

    // this.router.add('/university/(:any)/events', async (id) => {
    //     let html = universityEventsTemplate();
    //     el.innerHTML = html;
    //     try {
    //         const responseUniversity = await api.get('/university/' + id);
    //         const university = responseUniversity.data;
    //         console.log(university);
    //         html = universityEventsTemplate({university});
    //         el.innerHTML = html;
    //     } catch (error) {
    //         showError(error)
    //     } finally {
    //         removeLoadingClass();
    //     }
    // });

    this.router.add('/university/(:any)', async (id) => {
        let html = universityProfileTemplate();
        el.innerHTML = html;
        try {
            const responseUniversity = await api.get('/university/' + id);
            const university = responseUniversity.data;
            console.log(university);
            html = universityProfileTemplate({university});
            el.innerHTML = html;
            document.getElementById('university-profile').innerHTML = universityNewsTemplate({university});
            document.getElementById('news-menu').addEventListener("click", async () => {
                    document.getElementById('university-profile').innerHTML = universityNewsTemplate({university});
                }
            );
            document.getElementById('faculties-menu').addEventListener("click", async () => {
                    document.getElementById('university-profile').innerHTML = universityFacultiesTemplate({university});
                }
            );
            document.getElementById('events-menu').addEventListener("click", async () => {
                    document.getElementById('university-profile').innerHTML = universityEventsTemplate({university});
                }
            );
            document.getElementById('about-menu').addEventListener("click", async () => {
                    document.getElementById('university-profile').innerHTML = universityAboutTemplate({university});
                    let about = document.getElementById("about-div");
                    about.innerHTML = university.about;
                }
            );
            document.getElementById('faq-menu').addEventListener("click", async () => {
                    document.getElementById('university-profile').innerHTML = universityFaqTemplate({university});
                }
            );
        } catch (error) {
            showError(error)
        } finally {
            removeLoadingClass();
            // addMenuListeners();

        }
    });

    // this.router.add('/university/(:any)/faculties', async (id) => {
    //     let html = universityFacultiesTemplate();
    //     el.innerHTML = html;
    //     try {
    //         const responseUniversity = await api.get('/university/' + id);
    //         const university = responseUniversity.data;
    //         console.log(university);
    //         html = universityFacultiesTemplate({university});
    //         el.innerHTML = html;
    //     } catch (error) {
    //         showError(error)
    //     } finally {
    //         removeLoadingClass();
    //     }
    // });
    // this.router.add('/university/(:any)/faq', async (id) => {
    //     let html = universityFaqTemplate();
    //     el.innerHTML = html;
    //     try {
    //         const responseUniversity = await api.get('/university/' + id);
    //         const university = responseUniversity.data;
    //         console.log(university);
    //         html = universityFaqTemplate({university});
    //         el.innerHTML = html;
    //     } catch (error) {
    //         showError(error)
    //     } finally {
    //         removeLoadingClass();
    //     }
    // });

    // this.router.add('/university/(:any)/about', async (id) => {
    //     let html = universityAboutTemplate();
    //     el.innerHTML = html;
    //     try {
    //
    //         const responseUniversity = await api.get('/university/' + id);
    //         const university = responseUniversity.data;
    //         console.log(university);
    //
    //         html = universityAboutTemplate({university});
    //         el.innerHTML = html;
    //         var about = document.getElementById("about-div");
    //         about.innerHTML = university.about;
    //     } catch (error) {
    //         showError(error)
    //     } finally {
    //         removeLoadingClass();
    //     }
    // });

    // this.router.add('/university/(:any)/news', async (id) => {
    //     let html = universityNewsTemplate();
    //     el.innerHTML = html;
    //     try {
    //         const responseUniversity = await api.get('/university/' + id);
    //         const university = responseUniversity.data;
    //         console.log(university);
    //         html = universityNewsTemplate({university});
    //         el.innerHTML = html;
    //     } catch (error) {
    //         showError(error)
    //     } finally {
    //         removeLoadingClass();
    //     }
    // });

    this.router.add('/universities', async () => {
        // Display loader first
        let html = universitiesTemplate();
        el.innerHTML = html;
        try {
            const responseUniversities = await api.get('/universities');
            const universities = responseUniversities.data;
            console.log(universities);
            html = universitiesTemplate({universities});
            el.innerHTML = html;
        } catch (error) {
            showError(error);
        } finally {
            // Remove loader status
            removeLoadingClass();

        }
    });


    // Navigate app to current url
    this.router.navigateTo(window.location.pathname);

    // Highlight Active Menu on Refresh/Page Reload
    // const link = $(`a[href$='${window.location.pathname}']`);
    // link.addClass('active');
    //
    //
    // $('a').on('click', (event) => {
    //     // Block browser page load
    //     event.preventDefault();
    //
    //     // Highlight Active Menu on Click
    //     const target = $(event.target);
    //     $('.item').removeClass('active');
    //     target.addClass('active');
    //
    //     // Navigate to clicked url
    //     const href = target.attr('href');
    //     const path = href.substr(href.lastIndexOf('/'));
    //     this.router.navigateTo(path);
    // });


});

function navigate(any) {
    this.router.navigateTo('/university/' + any);
}

function removeLoadingClass() {
    let els = document.getElementsByClassName("loading");

    Array.prototype.forEach.call(els, function (el) {
        el.classList.remove('loading');
    });
}

function addMenuListeners() {
    document.getElementById('news-menu').addEventListener("click", async () => {

        }
    );
}


