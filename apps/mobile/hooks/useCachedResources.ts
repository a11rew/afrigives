import { AntDesign, Feather, FontAwesome } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';

const useCachedResources = (): boolean => {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        await SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...FontAwesome.font,
          ...AntDesign.font,
          ...Feather.font,
          ps: require('../assets/fonts/ProductSans/ProductSans-Regular.ttf'),
          'ps-medium': require('../assets/fonts/ProductSans/ProductSans-Medium.ttf'),
          'ps-bold': require('../assets/fonts/ProductSans/ProductSans-Bold.ttf'),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        // console.warn(e);
      } finally {
        setLoadingComplete(true);
        await SplashScreen.hideAsync();
      }
    }

    void loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
};

export default useCachedResources;
