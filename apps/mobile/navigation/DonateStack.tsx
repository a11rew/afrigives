import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Donate from '@screens/Donate';
import DonationDetails from '@screens/Donate/DonationDetails';
import DonationPersonalisation from '@screens/Donate/DonationPersonalisation';

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
      <Stack.Screen
        name="DonationPersonalisation"
        component={DonationPersonalisation}
      />
    </Stack.Navigator>
  );
};

export default DonateStack;
