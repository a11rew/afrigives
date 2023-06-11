import {
  FlatList,
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import normalize from '@utils/normalize';
import { View, Text } from '@components/Themed';
import { useNavigation } from '@react-navigation/native';
import categories from '@data/categories';
import { SharedElement } from 'react-navigation-shared-element';

const DonationCategoriesPromo = (): JSX.Element => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Root', {
            screen: 'Home',
            params: {
              screen: 'Categories',
            },
          })
        }
      >
        <Text style={styles.h1}>Donation Categories</Text>
      </TouchableOpacity>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => (
          <CategoryCard
            accent={item.accent}
            image={item.image}
            title={item.name}
            campaigns={item.campaigns}
            id={item.id}
          />
        )}
        style={styles.list}
      />
    </View>
  );
};

interface CategoryProps {
  title: string;
  campaigns: number;
  image: ImageSourcePropType;
  accent: string;
  id: string;
}

const CategoryCard = ({
  image,
  title,
  campaigns,
  accent,
  id,
}: CategoryProps) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Root', {
          screen: 'Home',
          params: {
            screen: 'CategoryCampaignList',
            params: {
              id,
            },
          },
        })
      }
      style={styles.cardContainer}
    >
      <View style={[styles.spriteContainer, { backgroundColor: accent }]}>
        <SharedElement id={`banner-image.${id}`}>
          <Image source={image} style={styles.sprite} />
        </SharedElement>
      </View>
      <View style={styles.labelContainer}>
        <Text style={styles.h2}>{title}</Text>
        <Text style={styles.h3}>{campaigns} campaigns</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: '4%',
    justifyContent: 'space-between',
  },
  cardContainer: {
    backgroundColor: '#F5F5F5',
    borderRadius: 16,
    flexDirection: 'row',
    padding: 16,
    minWidth: normalize(252),
    marginRight: normalize(16),
  },
  spriteContainer: {
    padding: normalize(16),
    borderRadius: normalize(16),
    marginRight: normalize(16),
    alignItems: 'center',
    justifyContent: 'center',
  },
  h1: {
    fontFamily: 'ps-bold',
    fontSize: normalize(16),
    marginBottom: normalize(16),
  },
  sprite: {
    height: normalize(28),
    aspectRatio: 1,
  },
  h2: {
    fontFamily: 'ps-bold',
    fontSize: normalize(17),
    lineHeight: normalize(24),
  },
  h3: {
    fontFamily: 'ps',
    fontSize: normalize(14),
  },
  labelContainer: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },
  list: {
    // width: "150%",
  },
  button: {
    backgroundColor: '#0C6D3D',
    borderRadius: 16,
    height: '40%',
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: normalize(24),
  },
});

export default DonationCategoriesPromo;
