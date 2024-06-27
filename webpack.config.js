const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { title } = require("process");

module.exports = {
	mode: "development",
	entry: "./src/index.js",
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "dist"),
		clean: true,
	},
	devtool: "inline-source-map",
	devServer: {
		static: "./dist",
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			filename: "index.html",
			inject: "body",
		}),
	],
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: "asset/resource",
			},
			{
				test: /\.(csv|tsv)$/i,
				use: ["csv-loader"],
			},
			{
				test: /\.xml$/i,
				use: ["xml-loader"],
			},
		],
	},
	optimization: {
		runtimeChunk: "single",
	},
};
