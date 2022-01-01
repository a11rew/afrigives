import 'react-native-gesture-handler';
import 'intl';
import 'intl/locale-data/jsonp/en';
import { LogBox } from 'react-native';
import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { store } from './store';
import { supabase } from './services/supabase';

const App = (): JSX.Element | null => {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const user = supabase.auth.user();
  const session = supabase.auth.session();

  // https://github.com/facebook/react-native/issues/12981
  LogBox.ignoreLogs(['Setting a timer']);

  if (!isLoadingComplete) {
    return null;
  }

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <Navigation
            initialAuth={{ user, session }}
            colorScheme={colorScheme}
          />
          <StatusBar />
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
