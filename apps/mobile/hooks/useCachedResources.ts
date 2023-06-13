import { FontAwesome } from '@expo/vector-icons';
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
          'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
          ps: require('../assets/fonts/ProductSans/ProductSans-Regular.ttf'),
          'ps-italic': require('../assets/fonts/ProductSans/ProductSans-Italic.ttf'),
          'ps-thin': require('../assets/fonts/ProductSans/ProductSans-Thin.ttf'),
          'ps-light': require('../assets/fonts/ProductSans/ProductSans-Light.ttf'),
          'ps-medium': require('../assets/fonts/ProductSans/ProductSans-Medium.ttf'),
          'ps-bold': require('../assets/fonts/ProductSans/ProductSans-Bold.ttf'),
          'ps-black': require('../assets/fonts/ProductSans/ProductSans-Black.ttf'),
          'ps-thin-italic': require('../assets/fonts/ProductSans/ProductSans-ThinItalic.ttf'),
          'ps-light-italic': require('../assets/fonts/ProductSans/ProductSans-LightItalic.ttf'),
          'ps-medium-italic': require('../assets/fonts/ProductSans/ProductSans-MediumItalic.ttf'),
          'ps-bold-italic': require('../assets/fonts/ProductSans/ProductSans-BoldItalic.ttf'),
          'ps-black-italic': require('../assets/fonts/ProductSans/ProductSans-BlackItalic.ttf'),
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
