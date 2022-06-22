module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.ya?ml$/,
      // type: 'json',
      use: 'yaml-loader',
    });

    return config;
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
};
