const path = require("path");
const ReactServerWebpackPlugin = require("react-server-dom-webpack/plugin");

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
    conditionNames: ["react-server"],
  },
  mode: process.env.NODE_ENV,
  plugins: [],
};

const reactConfig = {
  ...sharedConfig,
  entry: {
    index: "./src/react/index.jsx",
  },
  output: {
    path: path.resolve(__dirname, "dist/react"),
    clean: true,
  },
  target: "web",
  plugins: [new ReactServerWebpackPlugin({ isServer: false })],
};

const serverConfig = {
  ...sharedConfig,
  entry: {
    index: "./src/server/index.jsx",
  },
  output: {
    path: path.resolve(__dirname, "dist/server"),
    clean: true,
  },
  target: "node",
};

module.exports = [reactConfig, serverConfig];
