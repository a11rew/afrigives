import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Places from '@screens/Places';
import PlacesDetail from '@screens/Places/PlacesDetail';
import type { PlacesStackParamList } from 'types';

const Stack = createNativeStackNavigator<PlacesStackParamList>();

const PlacesStack = (): JSX.Element => (
  <Stack.Navigator
    initialRouteName="PlacesScreen"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="PlacesScreen" component={Places} />
    <Stack.Screen name="PlacesDetail" component={PlacesDetail} />
  </Stack.Navigator>
);

export default PlacesStack;
