import 'react-native-gesture-handler';
import 'intl';
import 'intl/locale-data/jsonp/en';
import { ClerkProvider } from '@clerk/clerk-expo';
import Constants from 'expo-constants';
import * as SecureStore from 'expo-secure-store';
import { StatusBar } from 'expo-status-bar';
import { LogBox, Platform } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import useCachedResources from './hooks/useCachedResources';
import Navigation from './navigation';
import { store } from './store';

// @ts-expect-error - TODO: Type env variables in manifest
const { CLERK_PUBLISHABLE_KEY } = Constants.manifest.extra;

const tokenCache = {
  async getToken(key: string) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

const App = (): JSX.Element | null => {
  const isLoadingComplete = useCachedResources();

  // https://github.com/facebook/react-native/issues/12981
  LogBox.ignoreLogs(['Setting a timer']);

  if (!isLoadingComplete) {
    return null;
  }

  return (
    <ClerkProvider
      tokenCache={tokenCache}
      publishableKey={CLERK_PUBLISHABLE_KEY}
    >
      <Provider store={store}>
        <SafeAreaProvider>
          <SafeAreaView style={{ flex: 1 }}>
            <Navigation />
            <StatusBar
              translucent={false}
              backgroundColor="#000"
              style={Platform.OS === 'ios' ? 'auto' : 'light'}
            />
          </SafeAreaView>
        </SafeAreaProvider>
      </Provider>
    </ClerkProvider>
  );
};

export default App;
