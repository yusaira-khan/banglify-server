/**
 * Created by yusaira-khan on 14/08/15.
 */
//OUR HOPES ANDD EXPECTATIONS!
//bLACK HOLES AND REVELATIONS!
//(OOOO! THEY EVEN HAVE THE SAME NUMBER OF CHARACTERS!)
var fs = require('fs');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/lang";

var langugageJSON = {};
MongoClient.connect(url, function (err, db) {
  if (err) throw(err);

  var banglaCollection = db.collection('bangla');
  console.log(banglaCollection);
  banglaCollection.find().toArray(function (err, docs) {
    console.log(docs.length);
    docs.forEach(function (letter) {
      langugageJSON[letter.char] = {
        base: letter.base,
        desc: letter.description,
        special: null
      }
    });
db.close();
    fs.writeFile('../server/bangla.json',JSON.stringify(langugageJSON,null,1));

  })
});