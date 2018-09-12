const path = require("path");
const prodConfig = require("./webpack.prod");
const devConfig = require("./webpack.dev");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const MODE = console.log(process.env.npm_lifecycle_event);

const PATHS = {
  entry: path.resolve(__dirname, "./src/index.js")
};
const commonConfig = {
  entry: ["babel-polyfill", PATHS.entry],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /{node_modules}/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(jpg?j|png|gif|svg)$/i,
        use: ["url-loadre?limit=10000", "img-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "./src/index.html"),
      filename: "index.html"
    })
  ]
};

if (MODE === "dev") {
  const both = Object.assign({}, commonConfig, devConfig);
  module.exports = both;
} else if (MODE == "build") {
  mocule.exports = Object.assign({}, commonConfig, prodConfig);
}
