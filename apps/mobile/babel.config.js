module.exports = function (api) {
  api.cache(true);

  // Make Expo Router run from `src/app` instead of `app`.
  // Path is relative to `/node_modules/expo-router`
  process.env.EXPO_ROUTER_APP_ROOT = '../../apps/mobile/src/app';

  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
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
