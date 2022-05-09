const { time } = require('console');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { title } = require('process');


module.exports = {
    entry:'./src/scripts/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules:[
            { test: /\.svg$/, use: 'svg-inline-loader' },
            { test: /\.css$/, use: ['style-loader','css-loader']},
            { test: /\.(js)$/, use: 'babel-loader' },
            { test: /\.s[ac]ss$/i, use: ["style-loader", "css-loader","sass-loader",]}
        ]
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Virtual Keyboard',
            filename: 'index.html',
            template: "src/index.html"
        })
    ],
    devServer: {
        static: './dist',
        port:3002,
    },
}