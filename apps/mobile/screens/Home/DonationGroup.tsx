import { Text, View } from '@components/Themed';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import normalize from '@utils/normalize';
import { StyleSheet, TouchableOpacity } from 'react-native';

const DonationGroup = (): JSX.Element => {
  const navigation = useNavigation();

  return (
    <View>
      <Text style={styles.h1}>Donation group</Text>
      <View style={styles.container}>
        <Text style={styles.h2}>
          Join a group to donate together with friends and family
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate('Root', {
              screen: 'Home',
              params: {
                screen: 'DonationGroups',
              },
            })
          }
        >
          <AntDesign name="plus" size={normalize(20)} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#B8B8B8',
    borderRadius: 16,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: '4%',
    minHeight: normalize(80),
    justifyContent: 'space-between',
  },
  h1: {
    fontFamily: 'ps-bold',
    fontSize: normalize(16),
    marginBottom: normalize(16),
  },
  h2: {
    fontFamily: 'ps-medium',
    fontSize: normalize(14),
    lineHeight: normalize(24),
    width: '75%',
  },
  button: {
    backgroundColor: '#0C6D3D',
    borderRadius: 16,
    height: normalize(44),
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: normalize(24),
  },
});

export default DonationGroup;
