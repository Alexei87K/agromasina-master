const autoprefixer = require('autoprefixer');
const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require('webpack');


module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin({}),
      new UglifyJsPlugin({})
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 4200
  },
  plugins: [
  //   new CopyPlugin([{
  //     from: path.resolve(__dirname, 'src/img/'),
  //     to:   path.resolve(__dirname, 'dist/img/')
  //     }
  //  ]),
    new HTMLPlugin({
      filename: 'index.html',
      template: './src/index.html'
    }),
    
    new MiniCssExtractPlugin({
      filename: 'css/style.css'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ],
  resolve: {
    extensions: ['.js', '.ts', '.css', '.less']
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      },
      {
        test: /\.less$/,

        
        use: [
          MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader']
      },
      { 
        test: /\.(js|ts)$/, 
        exclude: /node_modules/, 
        loader: "babel-loader" 
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        
        use:[
          {
            loader: 'file-loader',
            options: {
              name: `img/[name].[ext]`,
              
              publicPath:'../'
            },
          }
           
        ],
      
      } 
    ],
  }
};