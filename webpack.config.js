const {createConfig} = require('@swords/tools');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = createConfig('library',{
  webpack:{
    externals:/(^react|^babel-runtime|^webpack|^antd|^@ant-design|^lodash)/,
    module:{
      rules:[
        {
          test:/.(less|css)$/,
          use:[MiniCssExtractPlugin.loader,'css-loader','less-loader']
        }
      ]
    },
    plugins:[
      new MiniCssExtractPlugin({
        filename:'dist.css',
      })
    ]
  }
});

module.exports = config;