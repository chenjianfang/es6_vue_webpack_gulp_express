var webpack = require('webpack');
var path = require("path");
module.exports = {
	entry:{
		main:'./src/main.js'
	},
	output:{
		path:'dist',
		filename:'[name].js'
	},
	module:{
		loaders:[
			{ test: /\.js$/, exclude: /node_modules/, loader: "babel?presets[]=es2015"}
		]
	}
};