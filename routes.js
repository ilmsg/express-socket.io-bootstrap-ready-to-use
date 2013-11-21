var main = require('./models/main.js');

module.exports = function( app ){
	
	app.get('/', main.index );

}