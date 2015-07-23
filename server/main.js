/**
 * Created by ykhan14 on 25/06/15.
 */

var db = require("mongojs")('lang', ['bangla']);
var async = require('async');
var numOfLetterA = 2437;
var defaultLetter = undefined;
var numOfEnd = 2404;
var zeroWidthJoiner = 8205;
var lastChunk=undefined;
var firstChunk = undefined;

lang={

  db:db,
  bangla: db.bangla,
  setupDB: function(callback){
    db.bangla.findOne({numeric:numOfLetterA},function(error,letter){
      defaultLetter = letter;
      console.log(defaultLetter);
      //callback();
    })
  }

};
lang.setupDB();
var word = '\u0995\u09A5\u09BE';
var converted = [];
var w = word.split('');
var h = [];
console.log(w,lang.defaultVowel);
var plus = 0;
for(var i= 0, len = word.length; i<len;i++){

  (function(){
    var k = i,p=plus;
  lang.bangla.findOne({char : w[i]}, function (error, data) {
    var j = k;
    console.log(data,j,w[j].charCodeAt(0));
    h[j+plus]=data.base;
    console.log(isConsonant(data.char),plus);
    if (isConsonant(data.char)){


      var next= w[j+plus+1]; if(next == undefined) {return;} else{ next = next.charCodeAt(0);}
      console.log(isConsonant(data.char),plus,next,isVowelSign(next));

      if (!isVowelSign(next)){
        plus++;
        h[j+plus]=defaultLetter.base;
      }
    }
  });})();

  //converted.push(c.base);
}

function isNextVowel(num){
  return (num >=2494 && num <=2527);
}
function isConsonant(char){
  console.log(char );
  if (isNaN(char)){
  //var vowelsigns = /[\2494-\2527]/;
  //return vowelsigns.test(char);
  char = char.charCodeAt(0);
  }
  console.log(char );
  return (char >=2453 && char <=2589);
  //var consonants =/[\2453-\2589]/;
  //return consonants.test(char);

}
function isVowelSign(char){
  if (isNaN(char)){
  //var vowelsigns = /[\2494-\2527]/;
  //return vowelsigns.test(char);
  char = char.charCodeAt(0);
  }
  return (char >=2494 && char <=2527);
}

setTimeout(function(){
  console.log(defaultLetter);
  console.log(h.join(''));
},1000);

//console.log(converted.join());