module.exports = {
  mode: "production",

  entry: "./src/js/app.js",

  module: {
    rules: [{ test: /\.ts/, use: "ts-loader" }],
  },
};
