import { SignedIn, SignedOut } from '@clerk/clerk-expo';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ModalScreen from '@screens/ModalScreen';
import NotFoundScreen from '@screens/NotFoundScreen';
import { type RootState } from '@store/index';
import { useSelector } from 'react-redux';
import { type RootStackParamList } from '../types';
import AuthStack from './AuthStack';
import BottomTabNavigator from './BottomTab';
import LinkingConfiguration from './LinkingConfiguration';

const Navigation = (): JSX.Element => {
  const { skipAuth } = useSelector((state: RootState) => state.auth);

  return (
    <NavigationContainer linking={LinkingConfiguration} theme={DefaultTheme}>
      {skipAuth ? (
        <RootNavigator />
      ) : (
        <>
          <SignedIn>
            <RootNavigator />
          </SignedIn>
          <SignedOut>
            <AuthStack />
          </SignedOut>
        </>
      )}
    </NavigationContainer>
  );
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen
      name="Root"
      component={BottomTabNavigator}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="NotFound" component={NotFoundScreen} />
    <Stack.Group screenOptions={{ presentation: 'modal' }}>
      <Stack.Screen name="Modal" component={ModalScreen} />
    </Stack.Group>
  </Stack.Navigator>
);

export default Navigation;
