var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
	template: __dirname + '/src/index.html',
	filename: 'index.html',
	inject: 'body'
});


module.exports = {
	entry: __dirname + '/src/index.js',
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: ["/node_modules/", "/vendor/", "Gruntfile.js"],
				loaders: 'babel-loader'
			}
		]
	},
	output: {
		filename: "[name]-bundle.js",
		path: __dirname + '/build/'
	},
	plugins: [HTMLWebpackPluginConfig]
};

