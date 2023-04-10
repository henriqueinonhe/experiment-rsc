const path = require("path");
const ReactServerWebpackPlugin = require("react-server-dom-webpack/plugin");

const config = {
  entry: {
    index: "./src/react/index.jsx",
  },
  output: {
    path: path.resolve(__dirname, "dist/client"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.m?jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: "swc-loader",
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  target: "web",
  plugins: [
    new ReactServerWebpackPlugin({
      isServer: false,
    }),
  ],
  mode: process.env.NODE_ENV,
  optimization: {
    minimize: false,
  },
  devtool: false,
};

module.exports = config;
