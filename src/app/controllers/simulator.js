var Simulator = function() {
	this.doSim = function(req, resp, params) {
		var self = this,
			request = require('request');


		// TODO add in some actual callback data for use in testing
		request.post('http://localhost:4014/commits/githubCallback', {example: 'callback_data_here'} function(error, response, body) {
			if(!error && response.statusCode == 200) {
				console.log(body)
				self.respond('sim done', {format: 'txt'});
			}
		});
	};
};

exports.Simulator = Simulator;