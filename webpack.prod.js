const path = require('path')
const common = require('./webpack.common')
const merge = require('webpack-merge')
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin');


module.exports = merge(common, {
    mode: 'production',
    output : {
        filename : 'main.[contentHash].js',
        path : path.resolve(__dirname, 'dist')
    },
    module:{
        rules:[
            {
                test: /\.scss$/,
                use: [miniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
        ]
    },
    plugins:[
    new miniCssExtractPlugin({
        filename: 'main.[hash].css'
    }),
    new CleanWebpackPlugin(),
    new WorkboxPlugin.GenerateSW()
    ]
})