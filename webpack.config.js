const path = require('path');
const webpack = require('webpack');
const PugPlugin = require('pug-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = (env) => {

  const isDevelopment = env.mode === 'development';

  return {
    mode: env.mode ?? 'development',

    entry: {
      index: path.resolve(__dirname, 'source', 'index.pug')
    },

    output: {
      path: path.resolve(__dirname, 'dist'),
      clean: true
    },

    plugins: [
      isDevelopment ? new webpack.ProgressPlugin() : undefined,

      new PugPlugin({
        pretty: true,
        js: {
          filename: 'js/[name].[contenthash:8].js'
        },
        css: {
          filename: 'css/[name].[contenthash:8].css'
        }
      }),

      new CopyPlugin({
        patterns: [
          {from: 'source/img/sprite.svg', to: 'img/sprite.svg'}
        ]
      })
    ],

    devtool: isDevelopment ? 'inline-source-map' : undefined,

    devServer: isDevelopment ? {
      port: 5000,
      open: true
    } : undefined,

    module: {
      rules: [
        {
          test: /.pug$/,
          loader: PugPlugin.loader
        },
        {
          test: /\.scss$/,
          use: [
            "css-loader",
            "sass-loader"
          ],
        }
      ],
    }
  }
};
