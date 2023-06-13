import type { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';
import type { AuthStackParamList, RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList & AuthStackParamList> = {
  prefixes: [Linking.createURL('/')],

  config: {
    screens: {
      Root: {
        screens: {
          Home: 'home',
        },
      },
      NewPassword: {
        path: 'newpass/*',
      },
      ForgotPassword: 'forgotpass',
      Onboarding: 'onboard',
      Login: 'login',
      Signup: 'signup',
      Modal: 'modal',
      NotFound: '*',
    },
  },
};

export default linking;
