import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PlacesStackParamList } from 'types';
import Places from '@screens/Places';
import PlacesDetail from '@screens/Places/PlacesDetail';

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
