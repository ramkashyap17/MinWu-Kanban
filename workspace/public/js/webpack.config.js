const path = require('path');

var config = {
   entry: ['./main.js'],
   output: {
      path : path.resolve(__dirname, './dist'),
      filename: 'build.js',
   },
   devServer: {
      inline: true,
      port: 4000
   },
   devtool : 'source-map',
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}
module.exports = config;