const {createConfig} = require('@swords/tools');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const config = createConfig('library',{
  webpack:{
    externals:/(^react|^babel-runtime|^webpack|^antd|^@ant-design)/,
    module:{
      rules:[
        {
          test:/.css$/,
          use:[MiniCssExtractPlugin.loader,'css-loader']
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