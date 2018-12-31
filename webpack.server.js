const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
    // Inform webpack, that we are building a bundle for node, not for browser
    target: 'node',

    // Tell webpack, root/entry file of our server application
    entry: './src/index.js',

    // Tell webpack, where to put the output file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },

    externals: [
        webpackNodeExternals()
    ]
};

module.exports = merge(baseConfig, config);