const {getUniversities, getNews, getUniversity} = require('./lib/backend-service');

// Listen for HTTP requests on port 3000
require('dotenv').config(); // read .env files

const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

// Set public folder as root
app.use(express.static('public'));

// Allow front-end access to node_modules folder
app.use('/scripts', express.static(`${__dirname}/node_modules/`));

// Express Error handler
const errorHandler = (err, req, res) => {
    if (err.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        res.status(403).send({title: 'Server responded with an error', message: err.message});
    } else if (err.request) {
        // The request was made but no response was received
        res.status(503).send({title: 'Unable to communicate with server', message: err.message});
    } else {
        // Something happened in setting up the request that triggered an Error
        res.status(500).send({title: 'An unexpected error occurred', message: err.message});
    }
};

app.get('/api/news', async (req, res) => {
    try {
        const data = await getNews();
        res.setHeader('Content-Type', 'application/json');
        res.send(data);
    } catch (error) {
        errorHandler(error, req, res);
    }
});

app.get('/api/universities', async (req, res) => {
    try {
        const data = await getUniversities();
        res.setHeader('Content-Type', 'application/json');
        res.send(data);
    } catch (error) {
        errorHandler(error, req, res);
    }
});

app.get('/api/university/:id', async (req, res) => {
    try {
        const data = await getUniversity(req.params.id);
        res.setHeader('Content-Type', 'application/json');
        res.send(data);
    } catch (error) {
        errorHandler(error, req, res);
    }
});

// Redirect all traffic to index.html
app.use((req, res) => res.sendFile(`${__dirname}/public/index.html`));
app.listen(port, () => {
    console.log('listening on %d', port);
});




