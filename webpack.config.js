const path = require("path"),
  webpack = require("webpack");

var screw_ie8 = false; // Same name as uglify's IE8 option. Turn this on to enable HMR.

var plugins = [];

// HMR doesn't work with IE8 
if(screw_ie8) {
  plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist/"
  },
  devServer: {
  	host: "0.0.0.0", // Use this rather than localhost so we can access from a VM for browser testing
  	contentBase: path.join(__dirname, "./"),
    publicPath: "/dist/",
    // HMR adds `Object.defineProperty` that breaks IE8
    hot: screw_ie8,
    inline: screw_ie8
  },
  plugins: plugins,
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, "src")
        ],
        use: {
          loader: "babel-loader"
        }
      },
      {
      	test: /\.js$/,
      	enforce: "post",
      	loader: "es3ify-loader"
      }
    ]
  }
};