// Form file paths in an OS-agnostic way
const path = require( 'path' );

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// We shall tell Webpack for to create the bundles
module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: {
        index: "./src/home/index.js",
        "workshops-list": "./src/workshops-list/workshops-list.js"
    },
    output: {
        path: path.join( __dirname, "dist" ),
        filename: "[name].bundle.js",
        clean: true
    },
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif|woff|woff2|eot|ttf|otf)$/i,
                use: [
                    {
                        loader: 'file-loader'
                    },
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/home/index.html',
            inject: true,
            chunks: [ 'index' ]
        }),
        new HtmlWebpackPlugin({
            filename: 'workshops-list.html',
            template: 'src/workshops-list/workshops-list.html',
            inject: true,
            chunks: [ 'workshops-list']
        })
    ]
};