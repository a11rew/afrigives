import 'react-native-gesture-handler';
import 'intl';
import 'intl/locale-data/jsonp/en';
import { StatusBar } from 'expo-status-bar';
import { LogBox, Platform } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { supabase } from './services/supabase';
import { store } from './store';

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
          <StatusBar
            translucent={false}
            backgroundColor="#000"
            style={Platform.OS === 'ios' ? 'auto' : 'light'}
          />
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
