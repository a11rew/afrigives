import ScreenHeader from '@components/ScreenHeader';
import { Text, View } from '@Themed';
import normalize from '@utils/normalize';
import { Image, ScrollView, StyleSheet } from 'react-native';
import { findCategory } from '@data/categories';
import { HomeStackScreenProps } from 'types';
import PrimaryActionButton from '@components/PrimaryActionButton';
import { SharedElement } from 'react-navigation-shared-element';

type Props = HomeStackScreenProps<'CategoryCampaignList'>;

const CategoryCampaignList = ({ route }: Props): JSX.Element => {
  const category = findCategory(route.params.id);

  return (
    <View style={{ flex: 1 }}>
      <ScreenHeader title="Campaigns" />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={[styles.banner, { backgroundColor: category?.accent }]}>
          <SharedElement id={`banner-image.${route.params.id}`}>
            <Image source={category?.image} style={styles.bannerImage} />
          </SharedElement>
        </View>
        <Text style={styles.h1}>{category?.name}</Text>
        {category?.categoryCampaigns.map((campaign) => (
          <View
            key={`${campaign.donationCount}${campaign.name}`}
            style={styles.card}
          >
            <CategoryCard name={campaign.name} count={campaign.donationCount} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

interface CategoryCardProps {
  name: string;
  count: number;
}

const CategoryCard = ({ name, count }: CategoryCardProps) => {
  return (
    <View style={styles.cardContainer}>
      <View style={{ width: '70%', marginBottom: normalize(16) }}>
        <Text style={styles.cardH1}>{name}</Text>
        <Text style={styles.cardH2}>{count} people have donated</Text>
      </View>
      <View>
        <PrimaryActionButton>Donate</PrimaryActionButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    width: '108%',
    aspectRatio: 1.75,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bannerImage: {
    aspectRatio: 1,
  },
  container: {
    paddingHorizontal: '3%',
    alignItems: 'center',
  },
  h1: {
    fontFamily: 'ps-bold',
    color: '#0C6D3D',
    fontSize: normalize(16),
    marginTop: normalize(20),
    alignSelf: 'flex-start',
  },
  card: {
    borderBottomColor: '#3B3B3B29',
    borderBottomWidth: 1,
    width: '106%',
    paddingHorizontal: '3%',
    paddingVertical: normalize(24),
  },
  cardContainer: {},
  cardH1: {
    fontFamily: 'ps-bold',
    fontSize: normalize(16),
  },
  cardH2: {
    fontFamily: 'ps-bold',
    fontSize: normalize(14),
    opacity: 0.56,
    marginTop: normalize(6),
    lineHeight: normalize(20),
  },
  button: {
    backgroundColor: '#F5F5F5',
    width: '65%',
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: normalize(16),
  },
});

export default CategoryCampaignList;
