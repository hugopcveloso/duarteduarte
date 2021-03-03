const path = require('path');
const withPlugins = require('next-compose-plugins');
const withVideos = require('next-videos');
const withImages = require('next-images');
const nextConfig = {
  webpack: (config) => {
    config.node = {
      fs: 'empty',
    };
    config.resolve.alias['components'] = path.join(__dirname, 'components');
    config.resolve.alias['public'] = path.join(__dirname, 'public');
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
        },
      },
    });
    return config;
  },
};
module.exports = withPlugins([withImages, withVideos], nextConfig);
