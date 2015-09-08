var fs = require('fs');
var defaultLetters = JSON.parse(fs.readFileSync(__dirname + '/json/bangla.json')),
  defaultVowel='\u0985',
  nokta = '\u09BC',
  hoshonto = '\u09CD';

module.exports = {ConvertingEnvironment: ConvertingEnvironment};

function ConvertingEnvironment(givenLetters) {
  if (givenLetters == undefined) {
    this.letters = defaultLetters;
  } else {
    this.letters = givenLetters;
  }
  this.result = [];
  this.convert = convert;
  this.getBase = getBase;
  this.addConsonant = addConsonant;
  this.handleDontoSho = handleDontoSho;
  this.checkAndHandleJaPhala = checkAndHandleJaPhala;
  this.addUnconveterted = addUnconveterted;
  this.addToResult = addToResult;
}

function convert(currentLetter, nextLetter) {
  if (!isBangla(currentLetter)) {
    this.addUnconveterted(currentLetter);
    return;
  }
  functionName = this.letters[currentLetter].functionUsed;
  this[functionName](currentLetter, nextLetter);
}

function getBase(currentLetter) {
  var convertedLetter = this.letters[currentLetter];
  this.addToResult(convertedLetter.base);
}

function addToResult(letter) {
  this.result.push(letter);
}


function addUnconveterted(currentLetter) {
  this.addToResult(currentLetter);
}


function addConsonant(current, next) {
  this.getBase(current);
  if (isConsonant(current) && canAddDefault(current, next)) {
    this.getBase(defaultVowel);
  }
}

function handleDontoSho(sho, nextLetter) {
  if (nextLetter == hoshonto || nextLetter == /*ree kar*/ '\u09C3') {
    this.addToResult('s');
  }
  else {
        this.addConsonant(sho, nextLetter);
  }
}

function checkAndHandleJaPhala(currentLetter, nextLetter) {
  if (currentLetter == hoshonto && nextLetter == /*ontostio jo*/'\u09AF') {
    this.changeJaToYa = true;
  } else if (this.changeJaToYa && currentLetter == '\u09AF') {
    this.addConsonant('\u09DF', nextLetter);
    this.changeJaToYa = false;
  }
}

function checkAndHandleNoktaChange(currentLetter, nextLetter) {
  if (nextLetter == undefined) {
    this.addConsonant(currentLetter, nextLetter);
    return;
  }
  if (nextLetter == nokta) {
    //addConsonant(this.letters[]);
  }
}

function canAddDefault(currentChar, nextChar) {
  //return (!isVowelSign(nextChar) && nextChar != hoshonto && nextChar != ' ');
  if (currentChar=='\u09aa'){

  }
  return (isConsonant(nextChar)
    || (isBoundaryExceptionConsonant(currentChar,nextChar)))
    && (!isWeirdR(currentChar,nextChar));
}
function isConsonant(char) {
  if (typeof char === 'undefined') return false;
  return (char >= '\u0995' && char <= '\u09B9' ) //ko  - ho
    || (char >= '\u09DC' && char <= '\u09DF') //doe shhuno ro - onntostio o
    || (char >= '\u0981' && char <= '\u0983');// unnashar- chandrabindu
}
function isVowelLetter(char) {
  if (typeof char === 'undefined') return false;
  return (char >= '\u0985' && char <= '\u0994');
}

function isVowelSign(char) {
  if (typeof char === 'undefined') return false;
  return (char >= '\u09BE' && char <= '\u09CC');
}

function isBoundaryExceptionConsonant(char, next) {
  var isExceptionLetters = (char >= '\u09DC' && char <= '\u09DF') || char=='\u09A4';
  if (isExceptionLetters) {//check if at end of word
    return ((next == undefined)) || !(isVowelLetter(next) || isVowelSign(next) || isConsonant(next));
  }
  return false;
}
//TODO:handle boe shunno ro being weird (korte, shorkar, robi)
function isWeirdR(current,next){

  return current=='\u09B0' && ( next == '\u09A4' || next=='\u09AC' || next == '\u0995')
}
function isBangla(char) {
  return (char > '\u0980' && char <= '\u09EF') || char == '\u0964';
}
