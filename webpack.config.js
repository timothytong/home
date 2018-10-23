const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/src/index.html',
  filename: 'index.html',
  inject: 'body'
})
const webpack = require('webpack');
const APP_DIR = path.resolve(__dirname, '/src');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
	entry: {
		vendor: [
		'react-dom',
		'react'
		],
		bundle: './src/index.js',
	},
	resolve: {
		extensions: ['.js', '.jsx', '.less']
	},
	output : {
		path: path.resolve('docs'),
		filename: '[name].js',
	},
    module: {
        rules: [
            { test: /\.js$/, use: [{
                loader: 'babel-loader'
            }], exclude: /node_modules/ },
            { test: /\.jsx$/, use: [{
                loader: 'babel-loader'
            }], exclude: /node_modules/ },
            { test: /\.less$/, use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader'
            }, {
                loader: 'less-loader'
            }] },
            { test: /\.css$/, use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader'
            }] },
            { test: /\.(jpeg|jpg|png|pdf|woff|woff2|eot|ttf|svg|otf)$/, use: [{
                loader: 'url-loader',

                options: {
                    limit: 100000
                }
            }], exclude: /node_modules/},
        ],
    },
    plugins: [
        HtmlWebpackPluginConfig,
        new ExtractTextPlugin( "bundle.css" ),
    ]
};
