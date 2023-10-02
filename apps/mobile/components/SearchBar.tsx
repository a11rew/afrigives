import SearchIcon from '@assets/svgs/search.svg';
import { View } from '@Themed';
import normalize from '@utils/normalize';
import { StyleSheet, TextInput } from 'react-native';

interface Props {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  placeholder?: string;
}

const SearchBar = ({ filter, setFilter, placeholder }: Props): JSX.Element => {
  return (
    <View style={styles.wrapper}>
      <SearchIcon style={styles.searchIcon} />
      <TextInput
        value={filter}
        onChangeText={(text) => setFilter(text)}
        style={styles.input}
        placeholder={placeholder || 'Search categories'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    justifyContent: 'center',
    padding: normalize(24),
    borderRadius: 16,
  },
  searchIcon: { marginRight: 18 },
  input: {
    width: '90%',
    lineHeight: 18,
    fontSize: normalize(16),
    fontFamily: 'sg-bold',
  },
});

export default SearchBar;
