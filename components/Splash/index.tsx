import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

import Onbooarding from '@screens/Onboarding';
import SplashView from './SplashView';

const Stack = createSharedElementStackNavigator();

const SplashStack = (): JSX.Element => (
  <Stack.Navigator
    initialRouteName="SplashView"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="SplashView" component={SplashView} />
    <Stack.Screen
      name="SplashOnboard"
      component={Onbooarding}
      sharedElements={() => [
        {
          id: 'afriLogo',
          animation: 'fade',
        },
      ]}
    />
  </Stack.Navigator>
);

export default SplashStack;
