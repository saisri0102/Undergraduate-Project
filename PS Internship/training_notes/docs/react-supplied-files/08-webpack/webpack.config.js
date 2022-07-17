// some modules used in the setup
const path = require( 'path' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const webpack = require( 'webpack' );

// CommonChunksPlugin is used to separate out common pieces between bundles into their own bundles

module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.jsx',
        admin: './src/admin/index.js'
    },
    output: {
        path: path.resolve( __dirname, 'dist' ),
        filename: '[name].bundle.js'
    },
    devServer: {
        contentBase: path.resolve( __dirname, 'public' ),
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve( __dirname, 'public/index.html' )
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        extensions: [
            '.js', '.jsx'
        ]
    }
};