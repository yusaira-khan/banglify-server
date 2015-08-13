var MongoClient = require('mongodb').MongoClient;
var url = process.env.DATABASE_ADDRESS
  .replace('<user>', process.env.MONGOLAB_USERNAME)
  .replace('<password>', process.env.MONGOLAB_PASSWORD);
var mappedArray = {};
function startDB(callback) {
  MongoClient.connect(url, function (err, db) {
    var banglaCollection = db.collection('bangla');
    banglaCollection.find().toArray(function (err, docs) {
      console.log(docs.length);
      docs.forEach(function(letter){
        mappedArray[letter.char]=letter.base;
      });
      callback();
      db.close();
    })
  });
}
module.exports = {
  connect: startDB,
  letters: mappedArray,
  defaultLetter:'অ',
  zeroWidthJoiner: String.fromCharCode(8205),
  hoshonto: String.fromCharCode(2509)
}
;