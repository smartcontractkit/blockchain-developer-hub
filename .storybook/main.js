const path = require('path');

module.exports = {
  stories: ['../**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-next-router',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.ya?ml$/,
      type: 'json', // Required by Webpack v4
      use: 'yaml-loader',
    });

    config.resolve.alias = {
      ...config.resolve.alias,
      '@/components': path.resolve(__dirname, '../src/components'),
      '@/data': path.resolve(__dirname, '../data'),
      '@/sections': path.resolve(__dirname, '../src/sections'),
      '@/layouts': path.resolve(__dirname, '../src/layouts'),
      '@/pages': path.resolve(__dirname, '../src/pages'),
      '@/helpers': path.resolve(__dirname, '../src/helpers'),
      '@/styles': path.resolve(__dirname, '../src/styles'),
      '/icons': path.resolve(__dirname, '../public/icons'),
      '/logos': path.resolve(__dirname, '../public/logos'),
    };
    return config;
  },
};
