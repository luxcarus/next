var webpack = require("webpack")
var path = require("path")
var SRC = path.resolve(__dirname, 'src') 
module.exports = {
  // entry: SRC + "/index",
  // output: {
  //   filename: SRC + "/bundle.js"
  // },
  // entry: {
  //   "dist/Cat": SRC + "/webAPIs/Z/lib/rt/vehicle/VISClient.ts"
  // },
  entry: {
    "dist/device1": SRC + "/webAPIs/device/Rt.BluetoothObge",
    "dist/device2": SRC + "/webAPIs/device/Rt.BluetoothRnbs"
  },
  output: {
    path: path.resolve(__dirname, 'src'),
    filename: "[name].js"
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
      include: path.resolve(__dirname, 'src'),
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [
            ['es2015', {modules: false}]
          ]
        }
      }]
    }]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'dist/vendor',
    })
  ]
}