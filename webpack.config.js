const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "dist/",
  },
  module: {
    rules: [
      {
        test: /\.(png|gpg)$/,
        type: "asset",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: ["/node_modules/"],
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"],
            sourceMaps: "both",
          },
        },
      },
    ],
  },
  mode: "none",
};
