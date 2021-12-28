module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      ['module:react-native-dotenv'],
      [
        'module-resolver',
        {
          alias: {
            '@assets': './assets',
            '@components': './components',
            '@Themed': './components/Themed.tsx',
            '@constants': './constants',
            '@data': './data',
            '@hooks': './hooks',
            '@navigation': './navigation',
            '@screens': './screens',
            '@services': './services',
            '@store': './store',
            '@utils': './utils',
          },
        },
      ],
    ],
  };
};
