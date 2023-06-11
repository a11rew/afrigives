import { ColorSchemeName } from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Session, User } from '@supabase/supabase-js';
import { useSelector } from 'react-redux';

import ModalScreen from '@screens/ModalScreen';
import NotFoundScreen from '@screens/NotFoundScreen';
import { RootState } from '@store/index';

import AuthStack from './AuthStack';
import BottomTabNavigator from './BottomTab';
import LinkingConfiguration from './LinkingConfiguration';
import { RootStackParamList } from '../types';

const Navigation = ({
  colorScheme,
  initialAuth,
}: {
  colorScheme: ColorSchemeName;
  initialAuth: { session: Session | null; user: User | null };
}): JSX.Element => {
  const { session, user, skipAuth } = useSelector(
    (state: RootState) => state.auth
  );

  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      // theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
      theme={DefaultTheme}
    >
      {skipAuth ||
      ((initialAuth.session || session) && (initialAuth.user || user)) ? (
        <RootNavigator />
      ) : (
        <AuthStack />
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
