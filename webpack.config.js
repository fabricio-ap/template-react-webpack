const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx', // Arquivo inicial do app
  devtool: 'inline-source-map', // Facilita o debug

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
      {
        test: /\.(css|scss|less)$/, // No caso do scss e less, precisa instalar os loaders específicos
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts'],
  },

  devServer: {
    historyApiFallback: true,
    static: { directory: path.resolve(__dirname, './dist') },
    open: true,
    compress: true,
    port: 3000,
  },

  mode: 'development', // Aqui tem as opções development e production

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Caminho e nome do arquivo de saída
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Template React Webpack',
      template: path.resolve(__dirname, './src/index.html'), // template file
      filename: 'index.html', // output file
    }),
  ],
};
