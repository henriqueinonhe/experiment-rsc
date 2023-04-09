const path = require("path");
const ReactServerWebpackPlugin = require("react-server-dom-webpack/plugin");
const { merge } = require("webpack-merge");

const sharedConfig = {
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
  mode: process.env.NODE_ENV,
  optimization: {
    minimize: false,
  },
  devtool: false,
};

const reactConfig = merge(sharedConfig, {
  entry: {
    index: "./src/react/index.jsx",
  },
  output: {
    path: path.resolve(__dirname, "dist/react"),
    clean: true,
  },
  target: "web",
  plugins: [
    new ReactServerWebpackPlugin({
      isServer: false,
      // clientReferences: {
      //   directory: path.resolve(__dirname, "dist/react"),
      //   recursive: true,
      // },
    }),
  ],
});

const serverConfig = merge(sharedConfig, {
  ...sharedConfig,
  entry: {
    index: "./src/server/index.jsx",
  },
  output: {
    path: path.resolve(__dirname, "dist/server"),
    clean: true,
  },
  target: "node",
  resolve: {
    conditionNames: ["node", "react-server"],
  },
});

module.exports = [reactConfig, serverConfig];
