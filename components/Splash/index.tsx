import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

import Onbooarding from '@screens/Onboarding';
import SplashView from './SplashView';

const Stack = createSharedElementStackNavigator();

const SplashStack = (): JSX.Element => (
  <Stack.Navigator
    initialRouteName="SplashView"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen
      name="SplashView"
      component={SplashView}
      sharedElements={() => [
        {
          id: 'afriLogo',
        },
      ]}
    />
    <Stack.Screen
      name="SplashOnboard"
      component={Onbooarding}
      sharedElements={() => [
        {
          id: 'afriLogo',
        },
      ]}
    />
  </Stack.Navigator>
);

export default SplashStack;
