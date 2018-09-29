const webpack = require('webpack');
const glob = require('glob');
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

let entries = {};
glob.sync('./dev/assets/js/**/*.js').map(function(file) {
    entries[file.replace( /\.\/dev\//g, 'dist/' )] = file;
});

module.exports =  {
    entry: entries,
    output: {
        path: path.join(__dirname, ''),
        filename: '[name]'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            data: '$color: red;'
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        // make sure to include the plugin for the magic
        new VueLoaderPlugin()
    ]
};