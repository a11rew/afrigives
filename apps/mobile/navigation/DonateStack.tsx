import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Donate from '@screens/Donate';
import DonationDetails from '@screens/Donate/DonationDetails';

const Stack = createNativeStackNavigator();

const DonateStack = (): JSX.Element => {
  return (
    <Stack.Navigator
      initialRouteName="DonateScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="DonateScreen" component={Donate} />
      <Stack.Screen name="DonationDetails" component={DonationDetails} />
    </Stack.Navigator>
  );
};

export default DonateStack;
