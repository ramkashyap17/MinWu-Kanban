var Card = require('../models/kanban.card.model');

var render = function(req, res) {	
	var by = req.query.by;	
	res.render('index.html');
	// res.render('')
	// Card.find({}, by, function(err, cards) {
	// 	if (err) {
	// 		res.status(400).json({error: err.message});
	// 	} else {
	// 		res.json(cards);
	// 	}
	// });
};

module.exports = {
	render: render
};