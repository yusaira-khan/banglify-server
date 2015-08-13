var http = require('http');
var conn = require('./databaseConnector');
var htdocs = '/../htdocs';
var fs = require('fs');
var banglaConverter;
var server = http.createServer(function (req, response) {

  response.writeHead(200, {
    'Content-Type': 'text/html;charset=utf-8'
  });
  var link = req.url;
  var file = '';
  if (link == '/') {
    //file = '/index.html';
    writeDefault(response);
  } else if (link == 'all/') {
    writeAll(response);
  } else {
    file = link;
    fs.readFile(__dirname + htdocs + file,
      function (err, data) {
        if (err) {
          console.error(err);
          response.end('Error loading index.html');
        }
        else       response.end(data);
      });
  }
});
function start() {
  banglaConverter=require('./banglaConverter')(conn.letters);
  server.listen(process.env.PORT);
}

conn.connect(start);

function writeAll(response) {
  response.write('<h1>All the letters!</h1><ul>');
  for (var i in conn.letters) {
    response.write('<li>' + i + ' : ' + conn.letters[i] + '</li>')

  }
  response.end('</ul>');
}

function writeDefault(resp) {
  var test = '\u0995\u09A5\u09BE';
  test = 'বড়  আশা করে এসেছি গো কাছে দেকে নাও।';
  var result = banglaConverter.convertString(test);
  resp.write('<div><h1>Test string:</h1><br/>');
  resp.write('<h2>' + test + '</h2></div>');
  resp.write('<div><h1>Converted:</h1><br/>');
  resp.write('<h2>' + result + '</h2></div>');
  resp.end('<div><h1>Sup?</h1></div>')

}
