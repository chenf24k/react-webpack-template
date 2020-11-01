const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html'
        })
    ],
    module: {
        rules: [{ test: /\.js|jsx$/, exclude: /node_modules/, loader: "babel-loader" }]
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    }
}