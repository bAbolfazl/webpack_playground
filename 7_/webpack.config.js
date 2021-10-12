const path = require("path");

const miniCssExtractPlugin = require("mini-css-extract-plugin");
const htmlPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  watch: true,
  mode: "production",

  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },

  entry: "./src/js/app.js",

  output: {
    path: path.resolve(__dirname, "dist/"),
    // filename: '[name].min.js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"],
        },
      },
      { test: /\.ts/, use: "ts-loader" },
      {
        test: /\.scss$/,
        use: [
          miniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
          "postcss-loader",
        ],
      },
    ],
  },

  plugins: [
    new TerserPlugin(),
    new CleanWebpackPlugin(),
    new htmlPlugin({
      filename: "index.html",
      template: "index.html",
    }),
    new miniCssExtractPlugin({
      filename: "css/mainStyle.css",
    }),
  ],
};
