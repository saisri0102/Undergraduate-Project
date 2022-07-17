const path = require( 'path' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join( __dirname, 'dist' ),
        filename: 'xyz.js'
    },
    devServer: {
        contentBase: path.join( __dirname, 'public' )
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join( __dirname, 'public/index.html' )
        })
    ]
};