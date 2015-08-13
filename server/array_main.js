/**
 * Created by ykhan14 on 25/06/15.
 */

var db = require("mongojs")('lang', ['bangla']);
var async = require('async');
var numOfLetterA = 2437;
var defaultLetter = undefined;
var numOfEnd = 2404;
var zeroWidthJoiner = 8205;
var lastChunk = undefined;
var firstChunk = undefined;

lang = {

  db: db,
  bangla: db.bangla,
  setupDB: function (callback) {
    db.bangla.findOne({numeric: numOfLetterA}, function (error, letter) {
      defaultLetter = letter;
      console.log(defaultLetter);
      //callback();
    })
  }

};
lang.setupDB(function(){}());
var word = '\u0995\u09A5\u09BE';
word = 'বড়  আশা করে এসেছি গো কাছে দেকে নাও।';
var converted = [];
var wordAsLetterArray = word.split('');
var convertedLetterArray = [];
console.log(wordAsLetterArray, lang.defaultVowel);
for (var wordIndex = 0, len = word.length; wordIndex < len; wordIndex++) {

  (function infoClosure() {
    var wordClosureIndex = wordIndex;
    lang.bangla.findOne({char: wordAsLetterArray[wordIndex]}, function (error, data) {
      if (error){
        console.error(error);
        throw error;

      }
      console.log(wordClosureIndex, wordAsLetterArray[wordClosureIndex]);
      if (data===null){
        toEnter=wordAsLetterArray[wordClosureIndex];
        return;
      }else{
        toEnter = data.base;
      }

      convertedLetterArray[wordClosureIndex] = toEnter;
      if (isConsonant(data.char)) {
        var next = wordAsLetterArray[wordClosureIndex + 1];
        if (next == undefined) {
          return;
        } else {
          next = next.charCodeAt(0);
        }
        //console.log(isConsonant(data.char), next, isVowelSign(next));

        if (!isVowelSign(next)) {
          convertedLetterArray[wordClosureIndex]=[toEnter,defaultLetter.base];
        }
      }
    });
  })();

  //converted.push(c.base);
}

function isNextVowel(num) {
  return (num >= 2494 && num <= 2527);
}
function isConsonant(char) {
  if (isNaN(char)) {
    //var vowelsigns = /[\2494-\2527]/;
    //return vowelsigns.test(char);
    char = char.charCodeAt(0);
  }
  return (char >= 2453 && char <= 2589);
  //var consonants =/[\2453-\2589]/;
  //return consonants.test(char);

}
function isVowelSign(char) {
  if (isNaN(char)) {
    //var vowelsigns = /[\2494-\2527]/;
    //return vowelsigns.test(char);
    char = char.charCodeAt(0);
  }
  return (char >= 2494 && char <= 2527);
}

setTimeout(function () {
  console.log(defaultLetter);

  console.log([].concat.apply([],convertedLetterArray).join());
}, 1000);

//console.log(converted.join());