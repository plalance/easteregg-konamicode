const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');

let config = {
        entry: ['./src/Ts/index.ts', './src/Scss/main.scss'],
        mode: 'development',
        output: {
            path: path.resolve(__dirname, './dist'),
            publicPath: "/dist",
            filename: "main.js"
        },
        resolve: {
            extensions: ['.js', '.ts', '.vue']
        },
        devServer: {
            // noInfo: true,
            port: 8000
        },
        devtool: "source-map",
        module: {
            rules: [
                // JS Files
                {
                    test: /\.ts$/,
                    loader: 'ts-loader',
                },
                {
                    test: /\.scss$/,
                    use: [{
                        loader: MiniCssExtractPlugin.loader
                    }, {
                        loader: "css-loader", options: {
                            sourceMap: true
                        }
                    }, {
                        loader: "sass-loader", options: {
                            sourceMap: true
                        }
                    }
                    ]
                },
                {
                    test: /\.png$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[name].[ext]',
                                context: path.resolve(__dirname, "src/"),
                                outputPath: 'Images/',
                                publicPath: './Images',
                                useRelativePaths: true
                            },
                        },
                    ],
                }
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                // Options similar to the same options in webpackOptions.output
                // both options are optional
                filename: "[name].css",
                chunkFilename: "[id].css"
            }),
        ]
    }
;

module.exports = config;