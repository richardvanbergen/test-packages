const path = require('path');

module.exports = {
  entry: './src/TestComponent.jsx',
  output: {
    filename: 'main.js',
    library: 'test-2',
    libraryTarget: 'commonjs2',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};