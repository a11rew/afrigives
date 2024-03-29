import SplashStack from '@components/Splash';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ForgotPassword from '@screens/Auth/ForgotPassword';
import Login from '@screens/Auth/Login';
import NewPassword from '@screens/Auth/NewPassword';
import SentMailModal from '@screens/Auth/SentMailModal';
import Signup from '@screens/Auth/Signup';
import type { AuthStackParamList } from '../types';

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = (): JSX.Element => {
  return (
    <Stack.Navigator
      initialRouteName="Onboarding"
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: 'white',
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
  );
};

export default AuthStack;
