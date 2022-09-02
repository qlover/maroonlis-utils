// webpack.prod.ts
const { merge } = require('webpack-merge');

import * as webpack from 'webpack';
const path = require('path');
const commonConfig = require('./webpack.common');
const prodConfig: webpack.Configuration = merge(commonConfig, {
  mode: 'production',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
  },
});

module.exports = prodConfig;
