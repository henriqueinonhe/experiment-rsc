const path = require("path");

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
