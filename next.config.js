module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['*'],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.ya?ml$/,
      type: 'json',
      use: 'yaml-loader',
    });

    return config;
  },
};
