// Load the http module to create an http server.
var http = require('http');
var htdocs = '/../htdocs';
var db = require('./database_adder');
var fs = require('fs');
var splitter = require('./splitter.js');

var server = http.createServer(function (req, responseToSend) {

    var file = req.url;

    if (file == '/') {
        file = '/index.html';
    }

    if (req.method == 'POST') {
        var body = '';
        req.on('data', function (data) {
            body += data;
        });
        req.on('end', function () {
            if (body != '')
            {
                var hash = splitter.formValues(body);

                var email = decodeURIComponent(hash["email"]);
                var name = hash["name"];

                db.add(email, name);
                //var status = document.getElementById('status');
                //status.textContent = 'Addresses saved!';
            }
        });
    }

    fs.readFile(__dirname + htdocs + file,
        function (err, data) {
            if (err) {
                console.log(err);
                responseToSend.writeHead(500);
                return responseToSend.end('Error loading index.html');
            }

            responseToSend.writeHead(200);
            responseToSend.end(data);
        });

});

server.listen(process.env.PORT || 8080);

console.log("Port currently being used is: " + (process.env.PORT || 8080));