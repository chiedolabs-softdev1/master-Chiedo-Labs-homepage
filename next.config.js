require('dotenv').config();
const withSass = require('@zeit/next-sass');
// const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');
const aliases = require('./aliases');

module.exports = withSass({
  cssModules: true,
  webpack: (config) => {
    const newConfig = { ...config };
    newConfig.resolve.alias = aliases.absoluteAliases;
    newConfig.plugins = [
      ...config.plugins,
      // new FilterWarningsPlugin({
      //   // Silence mini-css-extract-plugin generating lots of warnings for CSS ordering.
      //   // We use CSS modules that should not care for the order of CSS imports, so we
      //   // should be safe to ignore these.
      //   //
      //   // See: https://github.com/webpack-contrib/mini-css-extract-plugin/issues/250
      //   exclude: /mini-css-extract-plugin[^]*Conflicting order between:/,
      // }),
    ];
    return newConfig;
  },
  publicRuntimeConfig: { // Will be available on both server and client
    MAPS_API_KEY: process.env.MAPS_API_KEY,
    API_ROOT: process.env.API_ROOT,
  },
});
// If CSS Modules causes issues try this:
// https://github.com/webpack-contrib/mini-css-extract-plugin/issues/250#issuecomment-447346852