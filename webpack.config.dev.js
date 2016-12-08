import path from 'path';
import webpack from 'webpack';

export default {
  devtools: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client?path=/__what&timeout=2000&overlay=false',
    path.join(__dirname, '/client/index.js'),
  ],
  output: {
    path: '/',
    publicPath: '/',
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.png$/,
        loader: 'url-loader?limit=100000',
      },
      {
        test: /\.jpg$/,
        loader: 'file-loader',
      },
    ],
  },
  resolve: {
    extentions: ['', '.js', 'jsx', '.css'],
    alias: {
      dragulaCss: path.join(__dirname, '/node_modules/dragula/dist/dragula.min.css'),
    },
  },
  devtool: 'eval-source-map',
};
