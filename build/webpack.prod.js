"use strict";

const OptimizeCSSPlugin = require("optimize-css-assets-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const merge = require("webpack-merge");
const path = require("path");
const base = require("./webpack.base");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = module.exports = (env = {}) => {
  return merge(base, {
    entry: {
      app: "./example/main.js",
    },
    mode: "production",
    plugins: [
      new CleanWebpackPlugin(),
      new OptimizeCSSPlugin({
        cssProcessor: require("cssnano"),
        cssProcessorPluginOptions: {
          preset: ["default", { discardComments: { removeAll: true } }],
        },
      }),
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: path.resolve(__dirname, "../static/index.html"),
        inject: true,
      }),
      new CopyWebpackPlugin([
        {
          from: path.resolve(__dirname, "../static"),
          to: path.resolve(__dirname, "../dist"),
          ignore: [".*"],
        },
        {
          from: path.resolve(__dirname, "../example/views"),
          to: path.resolve(__dirname, "../dist/source"),
          ignore: [".*"],
        },
        {
          from: path.resolve(__dirname, "../packages/theme"),
          to: path.resolve(__dirname, "../dist/theme"),
          ignore: [".*"],
        },
      ]),
    ],
  });
};
