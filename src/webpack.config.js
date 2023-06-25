const webpack = require('webpack');

module.exports = {
  // Other configuration options...
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
  ],
};
