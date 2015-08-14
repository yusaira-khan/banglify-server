/**
 * Created by ykhan14 on 25/06/15.
 */
  var through = require('through2');
//var split = require("split");
var letters,
  zeroWidthJoiner = String.fromCharCode(8205),
  defaultVowel = 'অ',
  hoshonto=String.fromCharCode(2509);

module.exports = function (lettersToUse) {
  letters =lettersToUse;
  return {
    convertString: convert,
    convertStream: toStream
  }
};
//TODO: put access to db in this folder
//TODO: remove database, it's annoying
//TODO: handle different pronunciation of dontoshho
//TODO: handle different cases of jo phola
//TODO: test how it works without split
//TODO: use split to split at each space character to cry real tears if it doesn't work
//TODO: test somehow (probably unittests and selenium
function streamWriter(buffer,encoding,getNextChunk){
  console.log("----------------------");
  buffer=buffer.toString();
  console.log(buffer);
  a=convert(buffer);
  console.log(a,"\n======================\n");
  this.push(a);
  getNextChunk();
}

var streamChanger = through(streamWriter);
function toStream(sourceStream,sinkStream){
  sourceStream.pipe(streamChanger).pipe(sinkStream);
}

function convert(string) {
  word = string.split('');
  result = [];
  len = string.length;
  for (var i = 0; i < len; i++) {
    var convertedLetter = letters[word[i]];
    if (convertedLetter == undefined) {
      convertedLetter = word[i];
      if (convertedLetter == zeroWidthJoiner) {
        convertedLetter = '';
      }
    } else if (convertedLetter == hoshonto) {

      //TODO: handle hoshonto with various functions
    } //TODO: handle dontoshsho: without combined words sh, with combined words s

    result.push(convertedLetter);
    if (isConsonant(word[i]) && (!isVowelSign(word[i + 1])  || word[i+1]!= hoshonto)) {
      result.push(letters[defaultVowel]);
    }
  }
  return result.join('');
}

function isConsonant(char) {
  if (isNaN(char)) {
    char = char.charCodeAt(0);
  }
  return (char >= 2453 && char <= 2489 ) || (char >= 2524 && char <= 2527);

}

function isVowelSign(char) {
  if (typeof char === 'undefined') return false;
  if (isNaN(char)) {
    char = char.charCodeAt(0);
  }
  return (char >= 2494 && char <= 2508);
}


