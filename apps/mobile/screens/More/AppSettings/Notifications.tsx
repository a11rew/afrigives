import ScreenHeader from '@components/ScreenHeader';
import SwitchInput from '@components/SwitchInput';
import { Text, View } from '@components/Themed';
import Colors from '@constants/Colors';
import normalize from '@utils/normalize';
import { ScrollView, StyleSheet } from 'react-native';

const Notifications = (): JSX.Element => {
  return (
    <View style={{ flex: 1 }}>
      <ScreenHeader title="Settings" />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>Adjust app notification settings</Text>
        <SwitchInput title="Week in review mail" on />
        <SwitchInput title="Live tracking" />
        <SwitchInput title="New campaign alerts" on />
        <SwitchInput title="Invite-link accept" on />
        <SwitchInput title="Donation request processed" on />
        <SwitchInput title="Pick up day reminder" />
        <SwitchInput title="Contact joined Afrigives" />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontFamily: 'ps-bold',
    color: Colors.primary,
    fontSize: normalize(16),
    marginVertical: '4%',
  },
  container: {
    padding: '3%',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: '4%',
  },
  cardTitle: {
    fontFamily: 'ps-bold',
    fontSize: normalize(16),
    marginBottom: normalize(6),
  },
  cardState: {
    fontFamily: 'ps-bold',
    opacity: 0.56,
  },
});

export default Notifications;
