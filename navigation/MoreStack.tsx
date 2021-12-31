import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MoreStackParamList } from 'types';

import More from '@screens/More';

const Stack = createNativeStackNavigator<MoreStackParamList>();

const MoreStack = (): JSX.Element => (
  <Stack.Navigator
    initialRouteName="MoreScreen"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="MoreScreen" component={More} />
  </Stack.Navigator>
);

export default MoreStack;
