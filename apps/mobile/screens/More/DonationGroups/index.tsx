import NoDonationGroup from '@assets/sprites/NoDonationGroup.svg';
import PrimaryActionButton from '@components/PrimaryActionButton';
import ScreenHeader from '@components/ScreenHeader';
import { Text, View } from '@components/Themed';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import normalize from '@utils/normalize';
import { StyleSheet } from 'react-native';
import JoinDonationGroup from './JoinDonationGroup';

const Stack = createNativeStackNavigator();

const DonationStack = (): JSX.Element => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="NoDonationGroup" component={DonationGroups} />
    <Stack.Screen name="JoinDonationGroups" component={JoinDonationGroup} />
  </Stack.Navigator>
);

const DonationGroups = (): JSX.Element => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <ScreenHeader title="Donation groups" />
      <View style={styles.container}>
        <View>
          <View style={{ alignItems: 'center', paddingTop: '5%' }}>
            <Text style={styles.h1}>You&apos;re not in any donation group</Text>
            <Text style={styles.h2}>
              Join a donation group and start donating with friends and family
            </Text>
          </View>
          <View style={{ alignItems: 'center', marginTop: '25%' }}>
            <NoDonationGroup />
          </View>
        </View>
        <PrimaryActionButton
          onPress={() =>
            // @ts-expect-error - screen name not registered right
            navigation.navigate('Root', {
              screen: 'More',
              params: {
                screen: 'DonationGroups',
                params: {
                  screen: 'JoinDonationGroups',
                },
              },
            })
          }
        >
          Join a donation group
        </PrimaryActionButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: '3%',
    paddingVertical: normalize(24),
  },
  h1: {
    fontSize: normalize(16),
    fontFamily: 'ps-bold',
    textAlign: 'center',
    marginBottom: normalize(12),
  },
  h2: {
    width: '70%',
    fontFamily: 'ps-bold',
    opacity: 0.56,
    textAlign: 'center',
  },
});

export default DonationStack;
