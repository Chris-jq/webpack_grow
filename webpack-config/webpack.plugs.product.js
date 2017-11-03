const pluginsConfig = require('./baseConfig/webpack.plugs');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

pluginsConfig.push(new ExtractTextPlugin((`index/[name].[contenthash:8].css`)));

module.exports = pluginsConfig;