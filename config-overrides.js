// config-overrides.js
const { override, fallbacks } = require('customize-cra');

module.exports = override(
  fallbacks({
    util: require.resolve('util/'),
    http: require.resolve('stream-http'),
    https: require.resolve('https-browserify'),
    zlib: require.resolve('browserify-zlib'),
    stream: require.resolve('stream-browserify'),
    assert: require.resolve('assert/'),
    url: require.resolve('url/'),
  })
);
