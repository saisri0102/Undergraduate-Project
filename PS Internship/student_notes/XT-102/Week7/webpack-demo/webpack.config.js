// We shall tell webpack for to create the bundles


// From file path in an OS-agnostic way

const path = require('path');
// entry can be string also
// In output path is absolute not relative

module.exports = {
    mode: "development",
    entry: {
        index : "./src/index.js"
    },
    output: {
        path: path.join(__dirname , "dist"),
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