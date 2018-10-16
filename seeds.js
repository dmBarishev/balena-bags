var mongoose = require("mongoose");
var Bag		 = require("./models/bag");

var data = [
    {
        name: "Placeholder 1", 
        image: "https://instagram.fdnk1-1.fna.fbcdn.net/vp/fa60a1720894dc2ecce60f9cd4eff28d/5C56C87C/t51.2885-15/e35/43625937_1063338153840023_2069009375197994257_n.jpg",
        description: "Ходить на прогулку лучше всего с сумкой @balenabags , в которую можно спокойно положить все, что поможет сделать ваш отдых незабываемым! ✨🍪🚀 Сумочка для @_panterla ⭐️"
    },
    {
        name: "Placeholder 2", 
        image: "https://instagram.fdnk1-1.fna.fbcdn.net/vp/9723659c77ddc8be69583610933cbaaa/5C5DCCC4/t51.2885-15/sh0.08/e35/s640x640/40763858_1868251386601532_4813536579209984922_n.jpg",
        description: "Глядя на эту сумочку меня охватывают чудные воспоминания о начале моего пути в создании прекрасных сумочек @balenabags ✨Спасибо @evtushenk.o за приятное чувство ностальгии вызванное этим забавным фото!"
    },
    {
        name: "Placeholder 3", 
        image: "https://instagram.fdnk1-1.fna.fbcdn.net/vp/45feb6164c50021398bdacec1db124a8/5C4A7AAF/t51.2885-15/sh0.08/e35/c0.78.769.769/s640x640/41843013_244191339605439_3144613994793925876_n.jpg",
        description: "чудесные фото от моих прекрасных заказчиц всегда радуют! спасибо @darinanananananananananananana 🌙"
    }
];

function seedDB(){
	Bag.remove({}, function(err){
		if(err){
			console.log(err);
		}
		data.forEach(function(seed){
			Bag.create(seed, function(err, bag){
				if(err){
					console.log(err);
				}
				else{
					console.log("added a bag");
				}
			});
		});
	});
};

module.exports = seedDB;