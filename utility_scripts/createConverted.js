var fs =require('fs');

var converter = require('../server/streamHandler');
var contents = fs.readFileSync('../htdocs/splitTest.html',{
    encoding:'utf8'
});


var contverted = converter.convertString(contents);
fs.writeFileSync('../htdocs/converted.html',contverted);
