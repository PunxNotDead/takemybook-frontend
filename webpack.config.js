const { resolve } = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	context: resolve(__dirname, 'src'),

	entry: [
		'react-hot-loader/patch',
		// activate HMR for React

		'webpack-dev-server/client?http://localhost:8080',
		// bundle the client for webpack-dev-server
		// and connect to the provided endpoint

		'webpack/hot/only-dev-server',
		// bundle the client for hot reloading
		// only- means to only hot reload for successful updates

		'babel-polyfill',

		'./index.js'
		// the entry point of our app
	],
	output: {
		filename: 'bundle.js',
		// the output bundle

		path: resolve(__dirname, 'dist'),

		publicPath: '/'
		// necessary for HMR to know where to load the hot update chunks
	},

	devtool: 'inline-source-map',

	devServer: {
		historyApiFallback: true,

		hot: true,
		// enable HMR on the server

		contentBase: resolve(__dirname, 'dist'),
		// match the output path

		publicPath: '/',
		// match the output `publicPath`

		proxy: {
			'/api': {
				target: 'http://localhost:3001',
				secure: false
			}
		},
	},

	module: {
		rules: [
			{
				test: /\.jsx?$/,
				use: ['babel-loader', 'eslint-loader'],
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader?modules'],
			},
			// the file-loader emits files.
			{
				test: /\.(woff|woff2)$/,
				loader: "url-loader?limit=10000&mimetype=application/font-woff&name=fonts/[name].[ext]"
			},
			{
				test: /\.ttf$/,
				loader: "file-loader?limit=10000&mimetype=application/font-ttf&name=fonts/[name].[ext]"
			},
			{
				test: /\.eot$/,
				loader: "file-loader?limit=10000&mimetype=application/font-eot$&name=fonts/[name].[ext]"
			},
			{
				test: /\.svg$/,
				loader: "file-loader?limit=10000&mimetype=application/font-svg$&name=fonts/[name].[ext]"
			}
		],
	},

	plugins: [
		new CopyWebpackPlugin([
			{ from: '../asserts' }
		]),

		new webpack.HotModuleReplacementPlugin(),
		// enable HMR globally

		new webpack.NamedModulesPlugin(),
		// prints more readable module names in the browser console on HMR updates
	],
};