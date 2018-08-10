/* eslint-disable */

module.exports = () => ({
  presets: [
    [
      require('next/babel'),
      {
        'preset-env': {
          useBuiltIns: 'usage',

          targets: {
            // For Next.js server rendering.
            node: 'current',

            // Aiming to support IE11 and Safari 9.1 onward.
            // http://browserl.ist/?q=cover+95%25+in+US
            browsers: ['cover 95% in US'],
          },
        },
      },
    ],
    [require('@babel/preset-stage-0'), {decoratorsLegacy: true}],
  ],
  plugins: [
    require('babel-plugin-emotion'),
    require('babel-plugin-transform-decorators-legacy').default,
    [
      require('babel-plugin-module-resolver'),
      {
        alias: {
          wedding: '.',
        },
      },
    ],
    [
      require('babel-plugin-transform-assets'),
      {
        extensions: ['jpg', 'png', 'otf', 'ttf'],
        regExp: '/static/(.+)',
        name: '/static/[1]?[sha512:hash:base64:7]',
      },
    ],
  ],
});
