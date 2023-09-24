import type { ExpoConfig } from '@expo/config';
import Env from './env';

const defineConfig = (): ExpoConfig => ({
  name: 'Afrigives',
  slug: 'Afrigives',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/images/icon.png',
  scheme: 'afrigives',
  userInterfaceStyle: 'automatic',
  extra: {
    eas: {
      projectId: 'fb8be00b-91b4-4b8d-bc65-b50ef02c1186',
    },
    clerkPublishableKey: Env.CLERK_PUBLISHABLE_KEY,
    ...Env,
  },
  splash: {
    image: './assets/images/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#376e3e',
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: false,
    bundleIdentifier: 'com.andrewglago.afrigives',
  },
  android: {
    versionCode: 3,
    adaptiveIcon: {
      foregroundImage: './assets/images/adaptive-icon.png',
      backgroundColor: '#376e3e',
    },
    package: 'com.andrewglago.afrigives',
  },
  web: {
    favicon: './assets/images/favicon.png',
  },
  packagerOpts: {
    config: 'metro.config.js',
    sourceExts: [
      'expo.ts',
      'expo.tsx',
      'expo.js',
      'expo.jsx',
      'ts',
      'tsx',
      'js',
      'jsx',
      'json',
      'wasm',
      'svg',
    ],
  },
  plugins: [
    [
      'expo-build-properties',
      {
        android: {
          compileSdkVersion: 33,
          targetSdkVersion: 33,
          buildToolsVersion: '33.0.0',
          kotlinVersion: '1.6.10',
        },
      },
    ],
  ],
});

export default defineConfig;
