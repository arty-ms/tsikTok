const path = require('path');
const webpack = require('webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');
const autoPrefixer = require('autoprefixer');

const nodeEnv = process.env.NODE_ENV || 'development';
const isProductionMode = nodeEnv === 'production';

module.exports = {
    name: 'client',
    mode: 'production',
    entry: {
        app: './client/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        chunkFilename: '[name].[hash].js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.(jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                        },
                    }],
            },
            {
                test: /\.(png|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                    }],
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [autoPrefixer],
                        },
                    },
                    'sass-loader',
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '*'],
        alias: {
            videojs: 'video.js',
            WaveSurfer: 'wavesurfer.js',
            RecordRTC: 'recordrtc',
        },
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin(
            {
                template: './client/index.html',
            },
        ),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            ENVIRONMENT: JSON.stringify(nodeEnv || 'local'),
            BUILD_DATE: JSON.stringify(new Date().toLocaleString()),
            'process.env': JSON.stringify(process.env),
        }),
        new webpack.SourceMapDevToolPlugin({
            filename: '[name].js.map',
        }),
    ].concat(isProductionMode ? [
        new CompressionPlugin({
            algorithm: 'gzip',
            test: /\.js$|\.css$|\.html$/,
            threshold: 10240,
            minRatio: 0.8,
        }),
        new BrotliPlugin({
            asset: '[path].br[query]',
            test: /\.js$|\.css$|\.html$/,
            threshold: 10240,
            minRatio: 0.8,
        }),
    ] : []),
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                cache: true,
                parallel: true,
                sourceMap: true,
                terserOptions: {
                    safari10: true,
                    compress: {
                        inline: false,
                    },
                },
            }),
        ],
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },
};
