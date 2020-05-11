const htmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const miniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: {
        
        app: ['babel-polyfill',
            __dirname+ '/src/client/index.js']
    },
    output:{
        library: 'client'
    },
    module:{
    rules: [
        {
            test: /\.html$/,
            use: {
                loader: 'html-loader'
            }
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: ['babel-loader']
        },
            ]
    },
    plugins:[new htmlWebpackPlugin({
            template: './src/client/views/index.html',
        })
    ]
}