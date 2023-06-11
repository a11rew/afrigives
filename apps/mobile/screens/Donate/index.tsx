import PrimaryActionButton from '@components/PrimaryActionButton';
import ScreenHeader from '@components/ScreenHeader';
import Colors from '@constants/Colors';
import { Text, View } from '@Themed';
import normalize from '@utils/normalize';
import { AntDesign } from '@expo/vector-icons';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@store/index';
import { moveForward, setImage } from '@store/donationSlice';
import { useNavigation } from '@react-navigation/native';

const Donate = (): JSX.Element => {
  const dispatch = useDispatch();
  const donationState = useSelector((state: RootState) => state.donation);
  const navigation = useNavigation();

  const handleNext = () => {
    if (donationState.progress === 0) {
      pickImage();
      return;
    }
    navigation.navigate('DonationDetails');
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });
    if (!result.cancelled) {
      dispatch(setImage(result.uri));
      dispatch(moveForward());
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <ScreenHeader title="Donate clothes" noBack />
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          padding: '3%',
          paddingBottom: '5%',
        }}
      >
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.h1}>Three-step donation process</Text>
          <Text style={styles.h2}>
            Donate clothes to any locations in Africa in 3 easy steps
          </Text>
          <Step1 handleNext={handleNext} done={donationState.progress > 0} />
          {donationState.progress > 0 && <Step2 handleNext={handleNext} />}
        </ScrollView>
        <PrimaryActionButton>Continue</PrimaryActionButton>
      </View>
    </View>
  );
};

const Step1 = ({
  handleNext,
  done,
}: {
  handleNext: () => void;
  done: boolean;
}) => (
  <View style={{ marginTop: '10%' }}>
    <Text style={[styles.h1, { color: Colors.primary }]}>Step 1/3</Text>
    <TouchableOpacity
      disabled={done}
      style={styles.stepCard}
      onPress={handleNext}
    >
      <View>
        <Text style={styles.h1}>Upload image of donation</Text>
        <Text style={styles.h2}>Take a picture or upload from gallery</Text>
      </View>
      {done ? (
        <View style={styles.check}>
          <AntDesign name="check" size={normalize(14)} color={Colors.primary} />
        </View>
      ) : (
        <View style={styles.button}>
          <AntDesign name="arrowdown" size={normalize(14)} color="black" />
        </View>
      )}
    </TouchableOpacity>
  </View>
);

const Step2 = ({ handleNext }: { handleNext: () => void }) => (
  <View style={{ marginTop: '10%' }}>
    <Text style={[styles.h1, { color: Colors.primary }]}>Step 2/3</Text>
    <TouchableOpacity style={styles.stepCard} onPress={handleNext}>
      <View>
        <Text style={styles.h1}>Choose donation pickup date</Text>
        <Text style={styles.h2}>Pick a convenient time</Text>
      </View>
      <View style={styles.button}>
        <AntDesign name="arrowdown" size={normalize(14)} color="black" />
      </View>
    </TouchableOpacity>
  </View>
);

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
});

export default Donate;
