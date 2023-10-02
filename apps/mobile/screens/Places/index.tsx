import StatusIcon from '@assets/svgs/Status.svg';
import PrimaryActionButton from '@components/PrimaryActionButton';
import ScreenHeader from '@components/ScreenHeader';
import SearchBar from '@components/SearchBar';
import trendingPlaces from '@data/places';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from '@Themed';
import normalize from '@utils/normalize';
import { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

const Places = (): JSX.Element => {
  const [filter, setFilter] = useState('');

  const filtered = trendingPlaces.filter((tp) =>
    tp.name.match(new RegExp(filter, 'i'))
  );

  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <ScreenHeader noBack title="Places" />
      <ScrollView contentContainerStyle={styles.container}>
        <SearchBar
          filter={filter}
          setFilter={setFilter}
          placeholder="Search places"
        />
        <Text style={styles.h1}>Trending places</Text>
        {filtered.map((item) => (
          <TrendingPlaceCard
            key={item.id}
            id={item.id}
            name={item.name}
            event={item.event}
          />
        ))}
      </ScrollView>
    </View>
  );
};

interface TrendingPlaceCardProps {
  name: string;
  event: string;
  id: string;
}

const TrendingPlaceCard = ({ name, event, id }: TrendingPlaceCardProps) => {
  const navigation = useNavigation();
  return (
    <View style={styles.cardContainer}>
      <View style={styles.status}>
        <StatusIcon />
      </View>
      <View style={{ width: '90%' }}>
        <Text style={styles.cardH1}>{name}</Text>
        <Text style={styles.cardH2}>{event}</Text>
        <PrimaryActionButton
          onPress={() =>
            // @ts-expect-error - screen name not registered right
            navigation.navigate('Root', {
              screen: 'Places',
              params: {
                screen: 'PlacesDetail',
                params: {
                  id,
                },
              },
            })
          }
        >
          Donate
        </PrimaryActionButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '3%',
    paddingVertical: normalize(20),
  },
  h1: {
    color: '#0C6D3D',
    fontFamily: 'sg-bold',
    fontSize: normalize(16),
    marginBottom: normalize(24),
    marginTop: normalize(32),
  },

  cardContainer: {
    flexDirection: 'row',
    marginBottom: normalize(40),
  },
  cardH1: {
    fontFamily: 'sg-bold',
    fontSize: normalize(16),
  },
  cardH2: {
    fontFamily: 'sg-bold',
    fontSize: normalize(14),
    color: '#C63636',
    marginTop: normalize(4),
    marginBottom: normalize(16),
  },
  status: {
    marginRight: normalize(16),
    paddingTop: normalize(2),
  },
});

export default Places;
