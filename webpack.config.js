const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js',
	},
	devServer: {
		contentBase: path.join(__dirname, 'public'),
		port: 3000,
		open: true,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: ['babel-loader', 'eslint-loader'],
			},
			{
				test: /\.css$/,
				include: /node_modules/,
				loaders: ['style-loader', 'css-loader'],
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader',
					{
						loader: 'postcss-loader',
						options: {
							ident: 'postcss',
							plugins: () => [
								autoprefixer({
									overrideBrowserslist: ['> 1%', 'last 2 versions'],
								}),
							],
						},
					},
				],
			},
		],
	},
};
