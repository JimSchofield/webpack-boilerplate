var path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: './src/js/main.js',
    output: {
        filename: 'js/main.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [
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
        new CopyWebpackPlugin([{
            from: 'src/index.html',
        }]),
    ],
    mode: 'development'
}