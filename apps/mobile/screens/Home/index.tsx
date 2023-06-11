import { ScrollView, StyleSheet } from 'react-native';

import { View } from '@components/Themed';
import normalize from '@utils/normalize';

import DonationCategories from './DonationCategoriesPromo';
import DonationGroup from './DonationGroup';
import HomeHeader from './Header';
import PopularCampaigns from './PopularCampaigns';

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
