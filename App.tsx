import "react-native-gesture-handler";
import { LogBox } from "react-native";
import { Provider } from "react-redux";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import { store } from "./store";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  // https://github.com/facebook/react-native/issues/12981
  LogBox.ignoreLogs(["Setting a timer"]);

  if (!isLoadingComplete) {
    return null;
  }
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
  );
}
