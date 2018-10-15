var express 	= require("express"),
	app			= express(),
	bodyParser	= require("body-parser"),
	mongoose	= require("mongoose")

mongoose.connect("mongodb://localhost/katyaShop", function(err){
	if(err) throw err;
	console.log("Mongoose successfully conected");
});

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req, res){
	res.render("home");
})

app.get("/bags", function(req, res){
	res.render("bags");
})




var server = app.listen(3000, function (){
  var host = server.address().address;
  var port = server.address().port;
  console.log('Server started at http://%s:%s', host, port);
});
