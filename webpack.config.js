var webpack = require("webpack")
var path = require("path")
var SRC = path.resolve(__dirname, 'src') 
module.exports = {
  entry: SRC + "/main.js",
  output: {
    filename: "built/bundle.js"
    // path: path.resolve(__dirname, 'src'),
    // filename: "built/bundle.js"
  },
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.js'],
    alias: {
      rt: SRC + '/webAPIs/Z/lib/rt'
    }
  },
  module: {
    rules: [{
      test: /\.js$/,
      include: path.resolve(__dirname, 'src/webAPIs'),
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [
            ['es2015', {modules: false}]
          ]
        }
      }]
    }]
  }
}