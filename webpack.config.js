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
        rules: [
            { test: /\.js|jsx$/i, exclude: /node_modules/, loader: "babel-loader" },
            { test: /\.css$/i, use: ['style-loader', 'css-loader'] },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', {
                    loader: 'css-loader',
                    options: { modules: { localIdentName: '[path][name]__[local]--[hash:base64:5]' } }
                }, 'sass-loader'
                ]
            },
        ]
    },
    resolve: {
        extensions: [".js", ".jsx", ".json"], alias: {
            '@': path.join(__dirname, './src'),
        }
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    }
}