import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MoreStackParamList } from 'types';

import More from '@screens/More';
import DonationGroups from '@screens/More/DonationGroups';
import InviteFriends from '@screens/More/InviteFriends';
import DonationStats from '@screens/More/DonationStats';

const Stack = createNativeStackNavigator<MoreStackParamList>();

const MoreStack = (): JSX.Element => (
  <Stack.Navigator
    initialRouteName="MoreScreen"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="MoreScreen" component={More} />
    <Stack.Screen name="DonationGroups" component={DonationGroups} />
    <Stack.Screen name="InviteFriends" component={InviteFriends} />
    <Stack.Screen name="DonationStats" component={DonationStats} />
  </Stack.Navigator>
);

export default MoreStack;
