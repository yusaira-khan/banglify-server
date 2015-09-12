var through = require('through2');
var banglaEnv = require('./banglaConverter');

//TODO: test somehow (probably unittests and selenium
module.exports = {
  convertString: convertString,
  getNewStreamConverter: getNewStreamConverter
};


function streamWriter(buffer, _, getNextChunk) {
  this.push(convertString(buffer.toString()));
  getNextChunk();
}

function getNewStreamConverter() {
  return through(streamWriter);
}


function convertString(string) {
  word = string.split('');
  result = [];
  len = string.length;
  var e = new banglaEnv.ConvertingEnvironment();

  for (var i = 0; i < len; i++) {
    var currentLetter = word[i], helperLetter = word[i + 1];
    e.convert(currentLetter, helperLetter);
  }

  return e.result.join('');
}

