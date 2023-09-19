import ScreenHeader from '@components/ScreenHeader';
import Home from '@screens/Home';
import Campaign from '@screens/Home/Campaign';
import Categories from '@screens/Home/Categories';
import CategoryCampaignList from '@screens/Home/Categories/CategoryCampaignList';
import DonationGroups from '@screens/More/DonationGroups';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import type { HomeStackParamList } from 'types';

const Stack = createSharedElementStackNavigator<HomeStackParamList>();

const HomeStack = (): JSX.Element => (
  <Stack.Navigator
    initialRouteName="HomeScreen"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="HomeScreen" component={Home} />
    <Stack.Screen name="DonationGroups" component={DonationGroups} />
    <Stack.Screen
      name="Campaign"
      component={Campaign}
      sharedElements={(route) => {
        const { id } = route.params;
        return [{ id: `image.${id}`, animation: 'fade' }];
      }}
      options={{
        header: () => <ScreenHeader title="Campaign" />,
      }}
    />
    <Stack.Screen name="Categories" component={Categories} />
    <Stack.Screen
      name="CategoryCampaignList"
      component={CategoryCampaignList}
      sharedElements={(route, otherRoute) => {
        if (otherRoute.name === 'HomeScreen') {
          const { id } = route.params;
          return [{ id: `banner-image.${id}` }];
        }
        return undefined;
      }}
    />
  </Stack.Navigator>
);

export default HomeStack;
