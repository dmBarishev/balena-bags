var mongoose = require("mongoose");

var bagSchema = new mongoose.Schema({
	name: String,
	image: String,
	description: String
});

module.exports = mongoose.model("Bag", bagSchema);