const miniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  watch: true,
  mode: "production",

  entry: "./src/js/app.js",

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [miniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },

  plugins: [
    new miniCssExtractPlugin({
      filename: "css/mainStyle.css",
    }),
  ],
};
