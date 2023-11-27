// Create web server
const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((request, response) => {
    console.log(request.url);
    if (request.url == "/") {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write("<h1>Index</h1>");
        response.end();
    } else if (request.url == "/login") {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write("<h1>Login</h1>");
        response.end();
    } else if (request.url == "/register") {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write("<h1>Register</h1>");
        response.end();
    } else if (request.url == "/script.js") {
        response.writeHead(200, { "Content-Type": "text/javascript" });
        fs.readFile(path.join(__dirname, "script.js"), (error, content) => {
            response.write(content);
            response.end();
        });
    } else if (request.url == "/style.css") {
        response.writeHead(200, { "Content-Type": "text/css" });
        fs.readFile(path.join(__dirname, "style.css"), (error, content) => {
            response.write(content);
            response.end();
        });
    } else if (request.url == "/imagen.jpg") {
        response.writeHead(200, { "Content-Type": "image/jpeg" });
        fs.readFile(path.join(__dirname, "imagen.jpg"), (error, content) => {
            response.write(content);
            response.end();
        });
    } else if (request.url == "/imagen2.jpg") {
        response.writeHead(200, { "Content-Type": "image/jpeg" });
        fs.readFile(path.join(__dirname, "imagen2.jpg"), (error, content) => {
            response.write(content);
            response.end();
        });
    } else {
        response.writeHead(404, { "Content-Type": "text/html" });
        response.write("<h1>404 Not Found</h1>");
        response.end();
    }
});

server.listen(3000, () => {
    console.log("Server started at port 3000");
});

