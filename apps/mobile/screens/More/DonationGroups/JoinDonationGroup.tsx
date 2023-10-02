import PrimaryActionButton from '@components/PrimaryActionButton';
import ScreenHeader from '@components/ScreenHeader';
import { Text, View } from '@components/Themed';
import Colors from '@constants/Colors';
import { AntDesign } from '@expo/vector-icons';
import normalize from '@utils/normalize';
import { StyleSheet, TextInput } from 'react-native';

const JoinDonationGroup = (): JSX.Element => {
  return (
    <View style={{ flex: 1 }}>
      <ScreenHeader title="Join donation group" />
      <View style={styles.container}>
        <Text style={styles.heading}>Join via link</Text>
        <View>
          <Text style={styles.h1}>
            Paste donation group invite link sent to you below
          </Text>
          <View style={styles.linkInputContainer}>
            <TextInput
              style={styles.linkInput}
              placeholder="Paste or type link here"
            />
            <AntDesign name="arrowright" size={24} color="black" />
          </View>
        </View>
        <View style={styles.createContainer}>
          <Text style={styles.heading}>Create new group</Text>
          <Text style={styles.h1}>
            Join a group to donate together with friends and family
          </Text>
        </View>
        <PrimaryActionButton>Create a group</PrimaryActionButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '3%',
    paddingVertical: normalize(24),
  },
  heading: {
    fontSize: normalize(16),
    color: Colors.primary,
    fontFamily: 'sg-bold',
    marginBottom: normalize(12),
  },
  h1: {
    // fontSize: normalize(16),
    fontFamily: 'sg-bold',
    opacity: 0.56,
    marginBottom: normalize(12),
  },
  linkInputContainer: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    paddingHorizontal: normalize(20),
    paddingVertical: normalize(16),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  linkInput: {
    fontFamily: 'sg-medium',
    fontSize: normalize(15),
    width: '80%',
  },
  createContainer: {
    marginTop: '15%',
  },
});

export default JoinDonationGroup;
