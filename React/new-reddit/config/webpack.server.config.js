const path = require("path");
const nodeExternals = require("webpack-node-externals");

const NODE_ENV = process.env.NODE_ENV;
const GLOBAL_SCSS_REGEXP = /\.global\.scss$/;

module.exports = {
  target: "node",
  mode: NODE_ENV ? NODE_ENV : "development",
  entry: path.resolve(__dirname, "../src/server/server.js"),
  output: {
    path: path.resolve(__dirname, "../dist/server"),
    filename: "server.js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        use: ["ts-loader"],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "css-loader",
            options: {
              modules: {
                mode: "local",
                localIdentName: "[name]__[local]--[hash:base64:5]",
                exportOnlyLocals: true,
              },
            },
          },
          "sass-loader",
        ],
        exclude: GLOBAL_SCSS_REGEXP,
      },
      {
        test: GLOBAL_SCSS_REGEXP,
        use: [
          "css-loader", "sass-loader"
        ]
      }
    ],
  },
  optimization: {
    minimize: false,
  },
};
