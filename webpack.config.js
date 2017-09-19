var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

var PUB_DIR = path.resolve(__dirname, "public");
var APP_DIR = path.resolve(__dirname, "app");

function htmlPublish() {
  return new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'index.html'
  })
}

var config = {
    entry: APP_DIR + "/index.js",
    output: {
        path: PUB_DIR,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)?/,
                include: APP_DIR,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-2"]
                }
            }
        ]
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    plugins: [
      htmlPublish()
    ],
    devServer: { inline: true, port: 3000 }
};

module.exports = config;
