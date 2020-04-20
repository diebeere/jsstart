module.exports = {
    mode:'development',

  

    entry: {
        'bundle': './src/view/index.js'
      },
    
module: {

    rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              "presets": ["@babel/preset-env", "@babel/preset-react"],
              "plugins": ["@babel/plugin-transform-runtime"]
            }
          }
        }
      ]
   
  },
 

    output: {
        filename: '[name].js',
        path: __dirname + "/public/js"
      }
}