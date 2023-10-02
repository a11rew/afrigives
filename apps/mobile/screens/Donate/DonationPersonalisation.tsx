import PrimaryActionButton from '@components/PrimaryActionButton';
import ScreenHeader from '@components/ScreenHeader';
import SwitchInput from '@components/SwitchInput';
import { Text, View } from '@components/Themed';
import Colors from '@constants/Colors';
import { useNavigation } from '@react-navigation/native';
import { setPersonalization } from '@store/donationSlice';
import normalize from '@utils/normalize';
import { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';

const DonationPersonalisation = (): JSX.Element => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [getUpdates, setGetUpdates] = useState(false);
  const [rememberDetails, setRememberDetails] = useState(false);

  const onSubmit = () => {
    dispatch(
      setPersonalization({
        getLocationUpdates: getUpdates,
        rememberPreferences: rememberDetails,
      })
    );
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <ScreenHeader title="Donate clothes" />
      <View style={styles.container}>
        <View>
          <Text style={styles.h1}>Three-step donation process</Text>
          <Text style={styles.h2}>
            Donate clothes to any locations in Africa in 3 easy steps
          </Text>

          <View style={{ marginTop: '10%' }}>
            <Text style={[styles.h1, { color: Colors.primary }]}>Step 3/3</Text>
            <View style={styles.stepCard}>
              <View>
                <Text style={styles.h1}>Personalize your donation</Text>
                <Text style={styles.h2}>Set details about your donation</Text>
              </View>
            </View>
          </View>

          <View style={{ marginTop: '3%', marginLeft: '1%' }}>
            <SwitchInput
              title="Get donation location updates"
              subtitle="Get notified on where your donation is going"
              containerStyle={styles.switch}
              value={getUpdates}
              onValueChange={() => setGetUpdates((e) => !e)}
            />

            <SwitchInput
              title="Remember donation details"
              subtitle="Save your donation details for next time"
              containerStyle={styles.switch}
              value={rememberDetails}
              onValueChange={() => setRememberDetails((e) => !e)}
            />
          </View>
        </View>
        <PrimaryActionButton onPress={onSubmit}>Continue</PrimaryActionButton>
      </View>
    </KeyboardAvoidingView>
  );
};

export default DonationPersonalisation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: '3%',
    paddingBottom: '5%',
  },
  h1: {
    fontFamily: 'sg-bold',
    fontSize: normalize(16),
    marginBottom: normalize(8),
  },
  h2: {
    fontFamily: 'sg-bold',
    opacity: 0.56,
  },

  stepCard: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: normalize(8),
    padding: normalize(16),
    height: normalize(85),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#F5F5F5',
    height: normalize(45),
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: normalize(16),
  },
  check: {
    height: normalize(25),
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 9999999,
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  pickupButton: {
    padding: normalize(16),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
  },
  switch: {
    marginVertical: '3%',
  },
});
