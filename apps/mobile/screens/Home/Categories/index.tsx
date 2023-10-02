import ScreenHeader from '@components/ScreenHeader';
import SearchBar from '@components/SearchBar';
import categories from '@data/categories';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from '@Themed';
import normalize from '@utils/normalize';
import { useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

const Categories = (): JSX.Element => {
  const [filter, setFilter] = useState('');

  const filtered = categories.filter((category) =>
    category.name.match(new RegExp(filter, 'i'))
  );

  return (
    <View style={{ flex: 1 }}>
      <ScreenHeader title="Donation Categories" />
      <View style={styles.container}>
        <SearchBar filter={filter} setFilter={setFilter} />
        <Text style={styles.h1}>Top categories</Text>
        <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
          {filtered.map((category) => (
            <View key={category.id} style={styles.card}>
              <CategoryCard
                name={category.name}
                description={category.description}
                id={category.id}
              />
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

interface CategoryCardProps {
  name: string;
  description: string;
  id: string;
}

const CategoryCard = ({ name, description, id }: CategoryCardProps) => {
  const navigation = useNavigation();
  return (
    <View style={styles.cardContainer}>
      <View style={{ width: '70%' }}>
        <Text style={styles.cardH1}>{name}</Text>
        <Text style={styles.cardH2}>{description}</Text>
      </View>
      <View
        style={{
          width: '20%',
          justifyContent: 'center',
          alignItems: 'flex-end',
        }}
      >
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Root', {
              screen: 'Home',
              params: {
                screen: 'CategoryCampaignList',
                params: { id },
              },
            })
          }
          style={styles.button}
        >
          <AntDesign name="right" size={normalize(14)} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: normalize(24),
    paddingHorizontal: '3%',
  },
  h1: {
    fontFamily: 'sg-bold',
    color: '#0C6D3D',
    fontSize: normalize(16),
    marginTop: normalize(20),
  },
  card: {
    borderBottomColor: '#3B3B3B29',
    borderBottomWidth: 1,
    width: '106%',
    paddingHorizontal: '3%',
    paddingVertical: normalize(24),
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardH1: {
    fontFamily: 'sg-bold',
    fontSize: normalize(16),
  },
  cardH2: {
    fontFamily: 'sg-bold',
    fontSize: normalize(14),
    opacity: 0.56,
    // maxWidth: '90%',
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

export default Categories;
