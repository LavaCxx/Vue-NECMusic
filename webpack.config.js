const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //提取成单个css文件
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin"); //压缩css插件
const HtmlWebpackPlugin = require("html-webpack-plugin"); //html文件打包，压缩
const CleanWebpackPlugin = require("clean-webpack-plugin"); //删除原来的打包文件
const copyWebpackPlugin = require("copy-webpack-plugin"); //复制静态文件

module.exports = {
  mode: "development",
  entry: {}, //入口文件
  output: {
    //出口文件
    publicPath: "",
    path: "",
    filename: "",
  },
  module: {},
  plugins: [],
};
