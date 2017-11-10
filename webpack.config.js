const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: `${__dirname}/src`,

  entry: {
    bundle: './index.jsx',
    // style: './assets/scss/main.scss',
  },

  output: {
    filename: '[name].[hash].js',
    path: `${__dirname}/dist`,
    publicPath: '/',
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader?sourceMap',
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          'css-loader?sourceMap',
          'resolve-url-loader',
          'sass-loader?sourceMap',
        ],
      },
      {
        test: /\.png$/,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: 'body',
    }),
  ],
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: './',
  },
};
