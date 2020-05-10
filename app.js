var express=require('express');
var database = require('./database');
var app=express();
var add_user = require('./test')

app.set('view engine', 'jade');

app.get('/', function(req, res) {
    
/*    res.send(`Hello World!
    <div><a href=/About>About</a></div>
    <div><a href=/Node>Node</a></div>
    <div><a href=/Angular>Angular</a></div>
    <div><a href=/Javascript>JavaScript</a></div>
    `);

});
*/
	res.render('index',
		{title:'Guru99', message:'Welcome'}
	)
});


app.get('/About', function(req, res)    {
    
    res.send('<h1>About</h1>')

})

app.route('/Node').get(function(req, res)
{

    res.send("Tutorial on Node.js")
    
})

app.route('/Angular').get(function(req, res)
{

    res.send("Tutorial on Angular")

})

app.route('/JavaScript').get(function(req, res)
{

    res.send("Tutorial on JavaScript")

})

app.route('/list').get(function(req, res)
{

    res.send("Tutorial on JavaScript")

})
add_user
var server = app.listen(3000, function() {

});

