const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');
//creates html index file for us


module.exports = {
    entry: './client/src/index.js',
    output: {
        path: path.join(__dirname, '/client/dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        }]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    plugins: [
        new HtmlwebpackPlugin({
            template: './client/dist/index.html'
        })
    ]



}