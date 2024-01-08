const path = require('path');
const PugPlugin = require('pug-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ImageminWebpWebpackPlugin = require("imagemin-webp-webpack-plugin");

module.exports = (env) => {

  const isDevelopment = env.mode === 'development';

  return {
    mode: env.mode ?? 'development',

    entry: {
      index: path.resolve(__dirname, 'source/pug/pages', 'index.pug'),
      form: path.resolve(__dirname, 'source/pug/pages', 'form.pug'),
      gallery: path.resolve(__dirname, 'source/pug/pages', 'gallery.pug')
    },

    output: {
      path: path.resolve(__dirname, 'dist'),
      clean: true
    },

    plugins: [

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
          {from: 'source/img/**/*.{png,jpg,webp,svg}', to: 'img/[name][ext]'},
          {from: 'source/favicon.ico', to: ''},
          {from: 'source/manifest.webmanifest', to: ''},
          {from: 'source/vendor/pristine/pristine.min.js', to: 'js/vendor/pristine'}
        ]
      }),

      new ImageminWebpWebpackPlugin({
        config: [{
          test: /\.(jpg|png)/,
          options: {
            quality: 80
          }
        }]
      })
    ],

    devtool: isDevelopment ? 'inline-source-map' : undefined,

    devServer: isDevelopment ? {
      port: 5000,
      open: true,

      static: {
        directory: path.join(__dirname, 'source')
      },
      watchFiles: {
        paths: ['*.js', 'scss/**/*.scss', '*.pug'],
        options: {
          usePolling: true,
        }
      }
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
            'css-loader',

            {
              loader: "postcss-loader",
              options: {
                postcssOptions: {
                  plugins: [
                    [
                      "autoprefixer"
                    ],
                  ],
                },
              }
            },

            'sass-loader'
          ],
        },
        {
          test: /\.(woff|woff2)$/,
          type: 'asset/resource',
          generator: {
            filename: 'fonts/[name][ext]'
          },
        },
        {
          test: /\.(png|jpg|webp|svg)/,
          type: 'asset/resource',
          generator: {
            filename: 'img/[name][ext]',
          },
        },
      ],
    }
  }
};
