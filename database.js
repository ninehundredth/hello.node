var MongoClient = require('mongodb').MongoClient;
var mydb = "mydb";
var mycollection = "customers";
var url = `mongodb://localhost:27017/${mydb}`;
var myobj = require("./myobj");
var request = require("./test");
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("Database created!");
    var dbo = db.db(mydb);
    dbo.collection(mycollection, function(err, res){
        if (err) throw err;
        console.log("Created collection customers");
        
    });
    db.close();
  }
);

myobj_one = myobj.one;
myobj_many = myobj.list;
myobj_imported = request.request_body;


MongoClient.connect(url, function(err, db){
    if (err) throw err;
    var dbo = db.db(mydb);
    dbo.collection(mycollection).insertOne(myobj_one, function(err, res){
        if (err) throw err;
        console.log("one doc inserted");
        console.log("myobj_one " + myobj_one);
        console.log("myobj_imported" + myobj_imported);
        db.close()
    });
});


MongoClient.connect(url, function(err, db){
    if (err) throw err;
    var dbo = db.db(mydb);
    dbo.collection(mycollection).insertMany(myobj_many, function(err, res){
        if (err) throw err;
        console.log("many doc inserted");
        db.close()
    });
});