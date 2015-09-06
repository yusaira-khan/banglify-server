/**
 * Created by yusaira-khan on 06/09/15.
 */
require('colors');
var jsdiff = require('diff');
var fs = require('fs');

var one = 'beep boop';
var other = 'beep boob blah';
var files=fs.readdirSync(__dirname+'/text');

fileContents=[];
for (var i= 0; i < 2; i++){
  fileContents.push(fs.readFileSync(__dirname+'/text/'+files[i],{
    encoding:'utf8'
}));
}
console.log(files[0].red,'\n',files[1].green);
var diff = jsdiff.diffChars(fileContents[0], fileContents[1]);

diff.forEach(function(part){
  console.log(part);
  // green for additions, red for deletions
  // grey for common parts
  var color = part.added ? 'green' :
    part.removed ? 'red' : 'grey';
  process.stderr.write(part.value[color]);
});

console.log();
