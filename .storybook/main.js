const path = require('path');
const pathToInlineSvg = path.resolve(__dirname, '../public/icons');

module.exports = {
  stories: ['../**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-interactions',
    'storybook-addon-next-router',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
        transcludeMarkdown: true,
      },
    },
    '@storybook/addon-essentials',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async (config) => {
    const fileLoaderRule = config.module.rules.find((rule) => rule.test && rule.test.test('.svg'));
    fileLoaderRule.exclude = pathToInlineSvg;
    config.module.rules.push(
      {
        test: /\.ya?ml$/,
        use: 'yaml-loader',
      },
      {
        test: /\.svg$/,
        include: pathToInlineSvg,
        use: ['@svgr/webpack'],
      }
    );

    config.resolve.alias = {
      ...config.resolve.alias,
      '@/components': path.resolve(__dirname, '../src/components'),
      '@/data': path.resolve(__dirname, '../data'),
      '@/sections': path.resolve(__dirname, '../src/sections'),
      '@/layouts': path.resolve(__dirname, '../src/layouts'),
      '@/pages': path.resolve(__dirname, '../src/pages'),
      '@/helpers': path.resolve(__dirname, '../src/helpers'),
      '@/styles': path.resolve(__dirname, '../src/styles'),
      '@/hooks': path.resolve(__dirname, '../src/hooks'),
      '@/icons': path.resolve(__dirname, '../public/icons'),
      '/icons': path.resolve(__dirname, '../public/icons'),
      '/logos': path.resolve(__dirname, '../public/logos'),
    };
    return config;
  },
};
