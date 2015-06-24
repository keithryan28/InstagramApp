var express = require('express');
var router = express.Router();
var instagram = require('instagram-node').instagram();
instagram.use({
  client_id:'af98dbc9500f4a588b1b1cf28f709a1c',
  client_secret: 'd816ad3042274a6db9b1a4a87c064109'
});

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log("reached here");

	instagram.media_popular(function (err, medias, remaining, limit){
		res.render('index', { grams: medias });
	});
  
});

module.exports = router;
