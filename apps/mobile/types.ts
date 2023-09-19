/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { type NavigatorScreenParams } from '@react-navigation/native';
import { type NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList, AuthStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
};

export type AuthStackParamList = {
  Login: undefined;
  Signup: undefined;
  Onboarding: undefined;
  ForgotPassword: undefined;
  NewPassword: {
    str: string;
  };
  SentMailModal: { email: string };
};

export type MoreStackParamList = {
  MoreScreen: undefined;
  DonationGroups: undefined;
  InviteFriends: undefined;
  DonationStats: undefined;
  FAQs: undefined;
  AppSettings: undefined;
};

export type HomeStackParamList = {
  HomeScreen: undefined;
  DonationGroups: undefined;
  Campaign: {
    id: string;
  };
  Categories: undefined;
  // Don't judge, naming is hard
  CategoryCampaignList: {
    id: string;
  };
};

export type PlacesStackParamList = {
  PlacesScreen: undefined;
  PlacesDetail: {
    id: string;
  };
};

export type HomeStackScreenProps<Screen extends keyof HomeStackParamList> =
  NativeStackScreenProps<HomeStackParamList, Screen>;

export type AuthStackScreenProps<Screen extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, Screen>;

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type PlacesStackScreenProps<Screen extends keyof PlacesStackParamList> =
  NativeStackScreenProps<PlacesStackParamList, Screen>;

export type MoreStackScreenProps<Screen extends keyof MoreStackParamList> =
  NativeStackScreenProps<MoreStackParamList, Screen>;

export type RootTabParamList = {
  Home: NavigatorScreenParams<HomeStackParamList> | undefined;
  Donate: undefined;
  More: undefined;
  Places: undefined;
};
