//USE later
var MongoClient = require('mongodb').MongoClient;


function queryLang(query) {
  MongoClient.connect('mongodb://127.0.0.1:27017/lang', function (err, db) {
    if (err) throw err;

    var collection = db.collection('bangla');
    query(collection);

  });

}

queryLang(function(col){
  col.find().toArray(function(err,res){
    console.log(res);
  })
});



