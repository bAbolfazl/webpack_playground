const miniCssExtractPlugin = require("mini-css-extract-plugin");
const htmlPlugin = require("html-webpack-plugin");

module.exports = {
  watch: true,
  mode: "production",

  entry: "./src/js/app.js",

  module: {
    rules: [{ test: /\.ts/, use: "ts-loader" }],

    rules: [
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
    new htmlPlugin({
      filename: "index.html",
      template: "index.html",
    }),
    new miniCssExtractPlugin({
      filename: "css/mainStyle.css",
    }),
  ],
};
