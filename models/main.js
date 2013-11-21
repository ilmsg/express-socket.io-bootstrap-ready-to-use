module.exports = main = {};

main.index = function( req, res ){
	var data = {
		title: 'My Title'
	};
	res.render( 'main/index', data );
};