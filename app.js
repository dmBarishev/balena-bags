var express 	= require("express"),
	app			= express(),
	bodyParser	= require("body-parser"),
	mongoose	= require("mongoose"),
	Bag 		= require("./models/bag"),
	seedDB 		= require("./seeds")

mongoose.connect("mongodb://localhost/balena_bags", function(err){
	if(err) throw err;
	console.log("Mongoose successfully conected");
});
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
seedDB();

app.get("/", function(req, res){
	res.render("home");
});

//INDEX
app.get("/bags", function(req, res){
	Bag.find({}, function(err, allBags){
		if(err){
			console.log(err);
		}
		else{
			res.render("bags/index", {bags: allBags});
		}
	});
});

app.post("/bags", function(req, res){
	var name 		= req.body.name;
	var image		= req.body.image;
	var desc = req.body.description;
	var newBag 	= {name: name, image: image, description: desc};
	Bag.create(newBag, function(err, newlyCreated){
		if(err){
			console.log(err);
		}
		else{
			res.redirect("/bags");
		}
	});
	res.render("bags");
});

//NEW - show form to create new bag
app.get("/bags/new", function(req, res){
   res.render("bags/new"); 
});


app.get("/bags/:id", function(req, res){
	Bag.findById(req.params.id).exec(function(err, foundBag){
		if(err){
			console.log(err);
		}
		else{
			console.log(foundBag);
			res.render("bags/show", {bag: foundBag});
		}
	});
});


var server = app.listen(3000, function (){
  var host = server.address().address;
  var port = server.address().port;
  console.log('Server started at http://%s:%s', host, port);
});
