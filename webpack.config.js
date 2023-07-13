const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = () =>{
  const config1 = {
    output: {
      filename: './dist-amd.js',
    },
    name: 'amd',
    entry: './src/index.js',
    mode: 'development',
    devServer:{
      hot: true,
      host: '0.0.0.0',
      allowedHosts: 'all',
      port: 9000,
      client: {
        progress: true,
        overlay: {
          errors: true,
          warnings: false
        }
      },
    },
    module: {
      rules: [
        {
          test: /\.html/,
          use: [
            {
              loader: 'html-loader'
            }
          ]
        },
        {
          test: /\.js$/,
          use: [
            {
              loader: 'babel-loader'
            }
          ]
        }
      ]
    },
    plugins:[
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        filename: `index.html`
      })
    ]
  };
  const config2 = {
    output: {
      filename: './dist-commonjs.js',
    },
    name: 'commonjs',
    entry: './src/index.js',
    mode: 'development',
    devServer:{
      hot: true,
      port: 9001,
      host: '0.0.0.0',
      allowedHosts: 'all',
      client: {
        progress: true,
        overlay: {
          errors: true,
          warnings: false
        }
      },
    }, 
    module: {
      rules: [
        {
          test: /\.html/,
          use: [
            {
              loader: 'html-loader'
            }
          ]
        },
        {
          test: /\.js$/,
          use: [
            {
              loader: 'babel-loader'
            }
          ]
        }
      ]
    },
    plugins:[
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        filename: `index.html`
      })
    ]
  };
  return [config1]
  // return [config1,config2]
}