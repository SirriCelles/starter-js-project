const HtmlWebpackPlugin = require('html-webpack-plugin');

// Resolving paths across all Os
const path = require('path');


module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: path.resolve(__dirname, 'src', 'index.html')
    })
  ],
  devServer: {
    static: path.resolve(__dirname, './dist')
  },
  optimization: {
    runtimeChunk: 'single',
  }
}


// module.exports = {
//   entry: './src/index.js',
//   output: {
//     path: '/dist',
//     filename: 'bundle.js'
//   },
//   devServer: {
//     static: './dist'
//   }
// }