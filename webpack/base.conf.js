const path = require('path');
// Webpack Base Settings
module.exports = {
	entry: './src/index.jsx',
	output: {
		path: path.resolve(__dirname, "..", "dist"),
		filename: 'react-metismenu-router.js',
		library: 'ReactMetismenuRouter',
		libraryTarget: 'umd',
	},
    resolve: {
      extensions: [
        '.js',
        '.jsx',
      ],
	},
    module: {
		rules: [
		{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			use: {
				loader: "babel-loader",
				options: {
					presets: ["@babel/preset-env", "@babel/preset-react"],
					plugins: [
						"@babel/plugin-transform-runtime",
						"@babel/plugin-syntax-dynamic-import",
						"@babel/plugin-proposal-class-properties"
					]
				}
			}
		},
      ],
    },
  };