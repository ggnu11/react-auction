import path from 'path';

module.exports = {
  webpack: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@Locales': path.resolve(__dirname, 'src/Locales'),
      '@recoil': path.resolve(__dirname, 'src/recoil'),
      '@routes': path.resolve(__dirname, 'src/routes'),
      '@service': path.resolve(__dirname, 'src/service'),
      '@styles': path.resolve(__dirname, 'src/styles'),
    },
  },
};
