"use strict";

const OptimizeCSSPlugin = require("optimize-css-assets-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const merge = require("webpack-merge");
const base = require("./webpack.base");
const path = require("path");
const uidev = process.env.UIENV === "dev";

function resolve(dir) {
  return path.join(__dirname, "..", dir);
}

module.exports = module.exports = (env = {}) => {
  return merge(base, {
    entry: {
      "dcs-element": resolve("packages/index.js"),
    },
    output: {
      path: resolve("lib"),
      filename: "[name].js",
      library: "ELEMENT",
      libraryTarget: "commonjs2",
    },
    mode: "production",
    devtool: uidev ? "eval-source-map" : false,
    plugins: [
      new CleanWebpackPlugin(),
      new OptimizeCSSPlugin({
        cssProcessor: require("cssnano"),
        cssProcessorPluginOptions: {
          preset: ["default", { discardComments: { removeAll: true } }],
        },
      }),
      new CopyWebpackPlugin([
        {
          from: path.resolve(__dirname, "../packages/theme"),
          to: path.resolve(__dirname, "../lib/theme"),
          ignore: [".*"],
        },
      ]),
    ],
  });
};
