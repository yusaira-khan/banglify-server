var http = require('http');
var htdocs = '/../htdocs';
var fs = require('fs');
var banglaStream = require('./streamHandler');
var server = http.createServer(function (request, response) {

//TODO: use a framework, for lulz
  var link = request.url;

  var file = '';

  if (request.method == 'POST' && link == '/api/') {

    request.pipe(banglaStream.getNewStreamConverter()).pipe(response);
    return;
  }

  if (link == '/') {
    file = '/index.html';
    response.writeHead(200, {
      'Content-Type': 'text/html;charset=utf-8' //TODO: check if this is right for post as well
    });
    fetchFile(file, response);
    //Get favico
    //Proper landing page
    //writeDefault(response);
  } else {

    file = link;

   writeExtension(file,response);
    fetchFile(file, response);
  }
});
function isFileInNodeModules(file){
  return file.split('/')[1]=='node_modules'
}

function fetchFile(fileName, response) {
  console.log(response.getHeader('content-type'));
  var file='';
  if (isFileInNodeModules(fileName)){
    file=__dirname + '/../'+fileName;
  }else{
    file = __dirname + htdocs + fileName;
  }
  fs.readFile(file,
    function (err, fileContents) {
      if (err) {
        console.error(err);
        response.end('Error loading index.html');
      }
      else response.end(fileContents);
    });
}

function writeExtension(filName,response){
var ext=  filName.split('.').pop();
  var type='';
  if (ext=='ttf' || ext=='woff2'){
    type= 'application/x-font-'+ext
  }else if(ext=='gif' || ext=='png'){
    type='image/'+ext;
  }
  else{
    console.log(ext);
    type = 'text/'+ext+';'
  }
  response.setHeader('Content-Type', type);

}

server.listen(process.env.PORT);



function writeDefault(resp) {
  var test = '\u0995\u09A5\u09BE';
  test = 'বড়  আশা করে এসেছি গো কাছে দেকে নাও।';
  var result = banglaStream.convertString(test);
  resp.write('<div><h1>Test string:</h1><br/>');
  resp.write('<h2>' + test + '</h2></div>');
  resp.write('<div><h1>Converted:</h1><br/>');
  resp.write('<h2>' + result + '</h2></div>');
  resp.end('<div><h1>Sup?</h1></div>')

}
