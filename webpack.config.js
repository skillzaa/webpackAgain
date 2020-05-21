const  path = require('path');

 module.exports = {
    mode: "development",
     entry: './src/index.js',
     output: {
         path: path.resolve(__dirname, 'dist'),
         filename: 'bundle.js'
     },
     module: {
        rules: [
           {
              test: /\.js$/,
              include: path.resolve(__dirname, 'src'),
              loader: 'babel-loader',
              query: {
                 presets: ['env']
              }
           }
        ]
     }
     
 }