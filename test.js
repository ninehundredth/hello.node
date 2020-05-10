var express=require('express');
//var database = require('./database');
var app=express();

var bodyParser = require('body-parser')

var MongoClient = require('mongodb').MongoClient;
var mydb = "mydb";
var mycollection = "customers";
var url = `mongodb://localhost:27017/${mydb}`;

function data(data_object) { 
    MongoClient.connect(url, function(err, db){
    if (err) throw err;
    var dbo = db.db(mydb);
    console.log("connected to db")
    dbo.collection(mycollection).insertOne(data_object, function(err, res){
        if (err) throw err;
        console.log("one doc inserted");
        console.log("myobj_one " + data_object);
        console.log(data_object.id)
        db.close()
    });
});
}
// create application/json parser
var jsonParser = bodyParser.json()
let request_body=""
add_user = app.route('/list').post(jsonParser, function(req, res)
{
    request_body=req.body
    console.log(request_body);
    res.send(request_body);
    id = request_body.id
    firstName = request_body.firstName
    lastName = request_body.lastName
    var myobj_export = new Object({ id: id, name: firstName, surname: lastName})
    console.log(id)
    data(myobj_export)
})
module.exports.add_user
app.listen(8080, function() {

});

