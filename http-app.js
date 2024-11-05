



const { readFileSync } = require('fs');
const http = require('http');

const homePage = readFileSync('./navbar-app/index.html');
const homeStyle = readFileSync('./navbar-app/style.css');
const homeImage = readFileSync('./navbar-app/logo.svg');
const homeLogic = readFileSync('./navbar-app/browser-app.js');

const server = http.createServer((req, res) => {
    const url = req.url;

    // Home page
    if (url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write(homePage);
        res.end();
    }
    // About page
    else if (url === '/about') {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write('<h1>About page</h1>');
        res.end();
    }
    // Style
    else if (url === '/style.css') {
        res.writeHead(200, { 'content-type': 'text/css' });
        res.write(homeStyle);
        res.end();
    }
    // Image
    else if (url === '/logo.svg') {
        res.writeHead(200, { 'content-type': 'image/svg+xml' });
        res.write(homeImage);
        res.end();
    }
    // Logic
    else if (url === '/browser-app.js') {
        res.writeHead(200, { 'content-type': 'text/javascript' });
        res.write(homeLogic);
        res.end();
    }
    // 404 error
    else {
        res.writeHead(404, { 'content-type': 'text/html' });
        res.write('<h1>Page not found</h1>');
        res.end();
    }
});

server.listen(5000);
