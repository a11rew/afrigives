import { ScrollView, StyleSheet, Switch } from 'react-native';
import { Text, View } from '@components/Themed';
import Colors from '@constants/Colors';
import normalize from '@utils/normalize';
import ScreenHeader from '@components/ScreenHeader';
import { useState } from 'react';

const Notifications = (): JSX.Element => {
  return (
    <View style={{ flex: 1 }}>
      <ScreenHeader title="Settings" />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>Adjust app notification settings</Text>
        <SwitchCard title="Week in review mail" on />
        <SwitchCard title="Live tracking" />
        <SwitchCard title="New campaign alerts" on />
        <SwitchCard title="Invite-link accept" on />
        <SwitchCard title="Donation request processed" on />
        <SwitchCard title="Pick up day reminder" />
        <SwitchCard title="Contact joined Afrigives" />
      </ScrollView>
    </View>
  );
};

const SwitchCard = ({
  title,
  on,
}: {
  title: string;
  on?: boolean;
}): JSX.Element => {
  const [isEnabled, setIsEnabled] = useState(on);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.cardContainer}>
      <View>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardState}>{isEnabled ? 'On' : 'Off'}</Text>
      </View>
      <Switch
        trackColor={{ false: '#0C6D3D29', true: Colors.primary }}
        thumbColor="#fff"
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
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
