import webpack from 'webpack';
import HtmlWebPackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const path = require("path");

export default (env) => {
   const devMode = env.development;

   return {
      entry: './src/index.js',
      output: {
         filename: 'static/js/' + (devMode ? 'rpg-master' : '[name].[contenthash]') + '.js',
         path: path.resolve(__dirname, "dist"),
         publicPath: devMode ? '/' : '/rpg-master'
      },
      module: {
         rules: [
            {
               test: /\.js$/,
               exclude: /node_modules/,
               use: {
                  loader: 'babel-loader'
               }
            },
            {
               test: /\.(sc|c)ss$/,
               use: [
                  MiniCssExtractPlugin.loader,
                  'css-loader',
                  'postcss-loader',
                  'sass-loader'
               ]
            },
            {
               test: /\.(jpg|png|gif|svg)$/,
               use: [
                  {
                     loader: 'file-loader',
                     options: {
                        name: '[path][name].[hash:20].[ext]'
                     }
                  }
               ]
            }
         ]
      },
      plugins: [
         new HtmlWebPackPlugin({
            template: './src/index.html',
            favicon: './static/images/site/favicon.ico'
         }),
         new MiniCssExtractPlugin({
            filename: 'static/css/' + (devMode ? 'rpg-master' : '[name].[contenthash]') + '.css'
         }),
         new webpack.DefinePlugin({
            'process.env': {
               'dev': devMode,
               'socket': (devMode ? JSON.stringify('ws://localhost:3000') : JSON.stringify('wss://gtonioli.dev'))
            }
         }),
         new webpack.HashedModuleIdsPlugin()
      ],
      optimization: {
         runtimeChunk: 'single',
         splitChunks: {
            chunks: 'all',
            maxInitialRequests: Infinity,
            minSize: 0,
            cacheGroups: {
               vendor: {
                  test: /[\\/]node_modules[\\/]/,
                  name(module) {
                     const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

                     return packageName.replace('@', '');
                  },
               },
            },
         }
      },
      devServer: {
         publicPath: '/'
      }
   }
};
