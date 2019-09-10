const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'kywon.app.bundle.js',
        publicPath: '/' 
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {loader: 'babel-loader'}
        },
        {
            test: /\.(png|gif|jpe?g)$/,
            use: [{
                loader: 'file-loader',
                options: {name: 'assets,/[hash].[ext]'}
            }]
        },
        {
            test: /\.html$/,
            use: {loader: 'html-loader'}
        },
        {
            test: /\.(s*)css$/,
            use: [{loader: MiniCssExtractPlugin.loader}, 'css-loader', 'sass-loader']
        }]
    },
    devServer: {
        port: 9001,
        historyApiFallback: true
    },
    plugins: [new HtmlWebPackPlugin({
        template: './public/index.html',
        filename: './index.html'
    }),
        new MiniCssExtractPlugin({filename: 'assets/[name].css'})]
}