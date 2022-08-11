module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.ya?ml$/,
        use: 'yaml-loader',
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      }
    );

    return config;
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
};
