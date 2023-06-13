import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ModalScreen from '@screens/ModalScreen';
import NotFoundScreen from '@screens/NotFoundScreen';
import { type RootState } from '@store/index';
import { type Session, type User } from '@supabase/supabase-js';
import { type ColorSchemeName } from 'react-native';
import { useSelector } from 'react-redux';
import { type RootStackParamList } from '../types';
import AuthStack from './AuthStack';
import BottomTabNavigator from './BottomTab';
import LinkingConfiguration from './LinkingConfiguration';

const Navigation = ({
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
