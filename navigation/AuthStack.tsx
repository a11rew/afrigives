import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

import Login from '@screens/Auth/Login';
import Signup from '@screens/Auth/Signup';
import SplashStack from '@components/Splash';
import NewPassword from '@screens/Auth/NewPassword';
import ForgotPassword from '@screens/Auth/ForgotPassword';
import SentMailModal from '@screens/Auth/SentMailModal';

import { AuthStackParamList } from '../types';

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = (): JSX.Element => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaProvider>
      <Stack.Navigator
        initialRouteName="Onboarding"
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: 'white',
            paddingTop: insets.top,
          },
        }}
      >
        <Stack.Screen name="Onboarding" component={SplashStack} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="NewPassword" component={NewPassword} />
        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen name="SentMailModal" component={SentMailModal} />
        </Stack.Group>
      </Stack.Navigator>
    </SafeAreaProvider>
  );
};

export default AuthStack;
