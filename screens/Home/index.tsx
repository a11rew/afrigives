import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScrollView, StyleSheet } from 'react-native';

import ScreenHeader from '@components/ScreenHeader';
import { View } from '@components/Themed';
import normalize from '@utils/normalize';

import Campaign from './Campaign';
import Categories from './Categories';
import DonationCategories from './DonationCategories';
import DonationGroup from './DonationGroup';
import HomeHeader from './Header';
import PopularCampaigns from './PopularCampaigns';

import { HomeStackParamList } from '../../types';

const Home = (): JSX.Element => {
  return (
    <>
      <HomeHeader />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={styles.donation}>
          <DonationGroup />
        </View>
        <View style={styles.donationCategories}>
          <DonationCategories />
        </View>
        <View style={styles.popularCampaigns}>
          <PopularCampaigns />
        </View>
      </ScrollView>
    </>
  );
};

const Stack = createNativeStackNavigator<HomeStackParamList>();

export const HomeStack = (): JSX.Element => (
  <Stack.Navigator
    initialRouteName="HomeScreen"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="HomeScreen" component={Home} options={{}} />
    <Stack.Screen
      name="Campaign"
      component={Campaign}
      options={{
        header: () => <ScreenHeader title="Campaign" />,
      }}
    />
    <Stack.Screen name="Categories" component={Categories} />
  </Stack.Navigator>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: normalize(16),
    backgroundColor: 'white',
  },
  donation: {
    paddingHorizontal: '3%',
  },
  donationCategories: {
    marginTop: '8%',
    paddingLeft: '3%',
  },
  popularCampaigns: {
    paddingHorizontal: '3%',

    marginTop: '8%',
  },
});

export default Home;
