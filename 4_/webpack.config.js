module.exports = {
  watch: true,
  mode: "production",

  entry: "./src/js/app.js",

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
};
