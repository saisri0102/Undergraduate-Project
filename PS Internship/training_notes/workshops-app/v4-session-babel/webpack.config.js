// Form file paths in an OS-agnostic way
const path = require( 'path' );

const HtmlWebpackPlugin = require('html-webpack-plugin');

// We shall tell Webpack for to create the bundles
module.exports = {
    mode: "development",
    entry: {
        "about": "./src/app/about/about.js",
        "sitemap": "./src/app/sitemap/sitemap.js",
        "index": "./src/index.js",
        "login": "./src/auth/login/login.js",
        "workshop-details": "./src/workshops/workshop-details/workshop-details.js",
        "workshops-list": "./src/workshops/workshops-list/workshops-list.js"
    },
    output: {
        path: path.join( __dirname, "dist" ),
        filename: "[name].bundle.js",
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.js$/i,
                use: 'babel-loader'
            },
            {
                test: /\.scss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: './src/app/about/about.html',
            template: './src/app/about/about.html',
            inject: true,
            chunks: [ 'about' ]
        }),
        new HtmlWebpackPlugin({
            filename: './src/app/sitemap/sitemap.html',
            template: './src/app/sitemap/sitemap.html',
            inject: true,
            chunks: [ 'sitemap' ]
        }),
        new HtmlWebpackPlugin({
            filename: './src/index.html',
            template: './src/index.html',
            inject: true,
            chunks: [ 'index' ]
        }),
        new HtmlWebpackPlugin({
            filename: './src/auth/login/login.html',
            template: './src/auth/login/login.html',
            inject: true,
            chunks: [ 'login' ]
        }),
        new HtmlWebpackPlugin({
            filename: './src/workshops/workshop-details/workshop-details.html',
            template: './src/workshops/workshop-details/workshop-details.html',
            inject: true,
            chunks: [ 'workshop-details' ]
        }),
        new HtmlWebpackPlugin({
            filename: './src/workshops/workshops-list/workshops-list.html',
            template: './src/workshops/workshops-list/workshops-list.html',
            inject: true,
            chunks: [ 'workshops-list' ]
        })
    ]
};