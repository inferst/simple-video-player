let HtmlWebpackPlugin = require('html-webpack-plugin');
let path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: [
        path.resolve('./src/index.tsx')
    ],
    output: {
        path: path.resolve('./build/'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', 'css']
    },
    module: {
        rules: [
            {
                exclude: [
                    /\.html$/,
                    /\.(js|jsx|ts|tsx)$/,
                    /\.css$/,
                    /\.json$/,
                    /\.svg$/
                ],
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: 'static/media/[name].[hash:8].[ext]'
                }
            },
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true,
                            localIdentName: '[name]__[local]___[hash:base64:5]'
                        }
                    }
                ]
            },
            {
                test: /\.css?$/,
                enforce: 'pre',
                loader: 'typed-css-modules-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: './public/index.html',
        })
    ]
};
