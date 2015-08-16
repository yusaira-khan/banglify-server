/**
 * Created by ykhan14 on 25/06/15.
 */
var fs = require('fs');
var through = require('through2');
//var split = require("split");
var letters = JSON.parse(fs.readFileSync('./json/bangla.json')),
  zeroWidthJoiner = String.fromCharCode(8205),
  defaultVowel = 'অ',
  hoshonto = String.fromCharCode(2509);

module.exports = {
  convertString: convert,
  getNewStreamConverter: transliterateStream
};

//TODO: handle different pronunciation of dontoshho
//TODO: handle different cases of jo phola
//TODO: test how it works without split
//TODO: use split to split at each space character to cry real tears if it doesn't work
//TODO: test somehow (probably unittests and selenium
//TODO: use functions (passing continutations) from 'special' field in JSON instead of if/else
function streamWriter(buffer, encoding, getNextChunk) {
  this.push(convert(buffer.toString()));
  getNextChunk();
}


function transliterateStream(sourceStream, sinkStream) {
  return through(streamWriter);
}

function convert(string) {
  word = string.split('');
  result = [];
  len = string.length;
  for (var i = 0; i < len; i++) {
    var currentLetter = word[i];
    if (currentLetter == zeroWidthJoiner) {
      continue;
    }
    var convertedLetter = letters[currentLetter];
    if (convertedLetter == undefined) {
      result.push(currentLetter);
      continue;

    } else if (currentLetter == hoshonto) {

      //TODO: handle hoshonto with various functions
    }
    else {
      //TODO: handle dontoshsho: without combined words sh, with combined words s (involves hoshonto)
      convertedLetter = convertedLetter.base;
    }
    result.push(convertedLetter);
    if (isConsonant(word[i]) && (!isVowelSign(word[i + 1]) && word[i + 1] != hoshonto)) {
      result.push(letters[defaultVowel].base);
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


