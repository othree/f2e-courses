var path = require("path");
var webpack = require("webpack");

var rootSourcePath = __dirname + "/src";
var rootAssetsPath = __dirname + "/dest";

module.exports = {
  context: rootSourcePath,
  resolve: {
    root: [path.join(__dirname, "bower_components")]
  },
  entry: {
    index: [
      rootSourcePath + '/js/app.js'
    ]
  },
  output: {
    path: rootAssetsPath + '/js',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.html$/, loader: "html" },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      }
    ]
  },
  plugins: [
    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
    )
  ]
};
