import { createNativeStackNavigator } from '@react-navigation/native-stack';
import More from '@screens/More';
import AppSettingsStack from '@screens/More/AppSettings';
import DonationGroups from '@screens/More/DonationGroups';
import DonationStats from '@screens/More/DonationStats';
import FAQ from '@screens/More/FAQ';
import InviteFriends from '@screens/More/InviteFriends';
import type { MoreStackParamList } from 'types';

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
    <Stack.Screen name="FAQs" component={FAQ} />
    <Stack.Screen name="AppSettings" component={AppSettingsStack} />
  </Stack.Navigator>
);

export default MoreStack;
