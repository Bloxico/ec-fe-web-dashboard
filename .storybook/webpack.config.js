// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.
const path = require('path');
const autoprefixer = require('autoprefixer');

const paths = require('../config/paths');

module.exports = {
  resolve: {
    alias: {
      src: paths.appSrc,
      '@views': path.join(paths.appSrc, 'components/views'),
      '@partials': path.join(paths.appSrc, 'components/views/common'),
      '@ui': path.join(paths.appSrc, 'components/ui'),
      '@styles': path.join(paths.appSrc, 'assets/styles'),
      '@abstract-styles': path.join(paths.appSrc, 'assets/styles/abstracts/_index.scss'),
      '@images': path.join(paths.appSrc, 'assets/images'),

      // Support React Native Web
      // https://www.smashingmagazine.com/2016/08/a-glimpse-into-the-future-with-react-native-for-web/
      'react-native': 'react-native-web',
    }
  },
  plugins: [
    // your custom plugins
  ],
  module: {
    rules: [
      // add your custom rules.
        {
            test: /\.(scss|css)$/,
            use: [
                require.resolve('style-loader'),
                {
                    loader: require.resolve('css-loader'),
                    options: {
                        importLoaders: 1,
                    },
                },
                {
                    loader: require.resolve('postcss-loader'),
                    options: {
                        // Necessary for external CSS imports to work
                        // https://github.com/facebookincubator/create-react-app/issues/2677
                        ident: 'postcss',
                        plugins: () => [
                            require('postcss-flexbugs-fixes'),
                            autoprefixer({
                                browsers: [
                                    '>1%',
                                    'last 4 versions',
                                    'Firefox ESR',
                                    'not ie < 9', // React doesn't support IE8 anyway
                                ],
                                flexbox: 'no-2009',
                            }),
                        ],
                    },
                },
                {
                    loader: 'sass-loader'
                },
            ],
        },
        {
            test: /\.(woff|woff2|eot|ttf|svg|gif|png)$/,
            use: 'url-loader'
        },
    ],
  },
};
