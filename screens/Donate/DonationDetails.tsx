import ScreenHeader from '@components/ScreenHeader';
import {
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import { View, Text } from '@components/Themed';
import PrimaryActionButton from '@components/PrimaryActionButton';
import normalize from '@utils/normalize';
import Colors from '@constants/Colors';
import CalendarIcon from '@assets/icons/calendar.svg';
import FormInput from '@components/FormInput';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import DonationDateModal from './DonationDateModal';

const DonationDetails = (): JSX.Element => {
  const [dateSelectorShow, setDateSelectorShow] = useState(false);

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <ScreenHeader title="Donate clothes" />
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          padding: '3%',
          paddingBottom: '5%',
        }}
      >
        <View style={styles.container}>
          <Text style={styles.h1}>Three-step donation process</Text>
          <Text style={styles.h2}>
            Donate clothes to any locations in Africa in 3 easy steps
          </Text>

          <View style={{ marginTop: '10%' }}>
            <Text style={[styles.h1, { color: Colors.primary }]}>Step 2/3</Text>
            <View style={styles.stepCard}>
              <View>
                <Text style={styles.h1}>Choose donation pickup date</Text>
                <Text style={styles.h2}>Pick a convenient time</Text>
              </View>
            </View>
          </View>

          <View style={{ marginTop: '3%' }}>
            <FormInput label="Home address" />
          </View>
          <View>
            <FormInput label="Mobile number" />
          </View>
          <TouchableOpacity
            style={styles.pickupButton}
            onPress={() => setDateSelectorShow((e) => !e)}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <CalendarIcon style={{ marginRight: normalize(16) }} />
              <Text style={{ fontFamily: 'ps-bold', fontSize: normalize(16) }}>
                Choose cloth pickup date
              </Text>
            </View>
            <AntDesign name="arrowright" size={normalize(20)} />
          </TouchableOpacity>
        </View>
        <PrimaryActionButton>Continue</PrimaryActionButton>
        <DonationDateModal
          dateSelectorShow={dateSelectorShow}
          setDateSelectorShow={setDateSelectorShow}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default DonationDetails;

const styles = StyleSheet.create({
  h1: {
    fontFamily: 'ps-bold',
    fontSize: normalize(16),
    marginBottom: normalize(8),
  },
  h2: {
    fontFamily: 'ps-bold',
    opacity: 0.56,
  },
  container: {
    flex: 1,
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
});
