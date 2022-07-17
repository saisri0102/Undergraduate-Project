// Form file paths in an OS-agnostic way
const path = require( 'path' );

// We shall tell Webpack for to create the bundles
module.exports = {
    mode: "development",
    entry: {
        index: "./src/index.js"
    },
    output: {
        path: path.join( __dirname, "dist" ),
        filename: "[name].bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
};