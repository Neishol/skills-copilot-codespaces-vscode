// Create a web server
const http = require('http');
const fs = require('fs');
const url = require('url');
const calculadora = require('./calculadora');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
    //console.log("Alguien entró a la página web");
    //console.log(req.url);
    //console.log(req.url.query);

    //Crear una variable que contenga la url
    const miURL = new URL(req.url, `http://${req.headers.host}`);
    //console.log(miURL);
    //console.log(miURL.searchParams.get('operacion'));

    //Crear una variable que contenga el path
    const path = miURL.pathname;
    //console.log(path);

    //Crear una variable que contenga el método
    const metodo = req.method.toLowerCase();
    //console.log(metodo);

    //Crear una variable que contenga la query
    const query = miURL.searchParams;
    //console.log(query);

    //Crear una variable que contenga la query
    const queryObject = querystring.parse(miURL.searchParams.toString());
    //console.log(queryObject);

    //Crear una variable que contenga el body
    const body = [];
    req.on('data', chunk => {
        body.push(chunk);
    }).on('end', () => {
        //console.log(Buffer.concat(body).toString());
        const bodyObject = querystring.parse(Buffer.concat(body).toString());
        //console.log(bodyObject);

        //Crear un switch para las rutas
        switch (path) {
            case '/':
                res.setHeader('Content-Type', 'text/html');
                res.write('<html>');
                res.write('<head><meta charset="UTF-8"><title>Calculadora</title></head>');
                res.write('<body><h1>Calculadora</h1>');
                res.write('<form action="operacion" method="POST">');
                res.write('<label for="num1">Primer número</label>');
                res.write('<input type="number" name="num1">');
                res.write('<label for="num2">Segundo número</label>');
                res.write('<input type="number" name="num2">');
                res.write('<label for="operacion">Operación</label>');
                res.write('<select name="operacion">');
                res.write('<option value="suma">Suma</option