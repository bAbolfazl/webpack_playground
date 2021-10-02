const miniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",

  entry: "./src/js/app.js",

  module: {
    rules: [
      {
        test: /\.css/,
        use: [miniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },

  plugins: [
    new miniCssExtractPlugin({
      filename: "css/mainStyle.css",
    }),
  ],
};
