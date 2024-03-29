import DonateButton from '@components/DonateButton';
import PrimaryActionButton from '@components/PrimaryActionButton';
import ScreenHeader from '@components/ScreenHeader';
import Colors from '@constants/Colors';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { setImage } from '@store/donationSlice';
import { type RootState } from '@store/index';
import { Text, View } from '@Themed';
import normalize from '@utils/normalize';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

const Donate = (): JSX.Element => {
  const [viewedPersonalisation, setViewedPersonalisation] = useState(false);

  const dispatch = useDispatch();
  const donationState = useSelector((state: RootState) => state.donation);
  const navigation = useNavigation();

  const pickImage = async () => {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });
    if (!result.cancelled) {
      dispatch(setImage(result.uri));
    }
  };

  const stepOneNext = pickImage;
  // @ts-expect-error - screen name not registered right
  const stepTwoNext = () => navigation.navigate('DonationDetails');
  const stepThreeNext = () => {
    // @ts-expect-error - screen name not registered right
    navigation.navigate('DonationPersonalisation');
    setViewedPersonalisation(true);
  };

  const isStepOneDone = Boolean(donationState.imageSource);
  const isStepTwoDone = isStepOneDone && Boolean(donationState.pickupDate);
  const isStepThreeDone = isStepTwoDone && viewedPersonalisation;

  const onContinue = () => {
    if (!isStepOneDone) {
      stepOneNext();
    } else if (!isStepTwoDone) {
      stepTwoNext();
    } else if (!isStepThreeDone) {
      stepThreeNext();
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
          <Step
            handleNext={stepOneNext}
            done={isStepOneDone}
            index={0}
            primaryText="Upload image of donation"
            secondaryText="Take a picture or upload from gallery"
          />

          {isStepOneDone && (
            <Step
              handleNext={stepTwoNext}
              done={isStepTwoDone}
              index={1}
              primaryText="Choose donation pickup date"
              secondaryText="Pick a convenient time"
            />
          )}

          {isStepTwoDone && (
            <Step
              handleNext={stepThreeNext}
              index={2}
              done={isStepThreeDone}
              primaryText="Personalize your donation"
              secondaryText="Set details about your donation"
            />
          )}
        </ScrollView>
        {isStepTwoDone ? (
          <DonateButton />
        ) : (
          <PrimaryActionButton onPress={onContinue}>
            Continue
          </PrimaryActionButton>
        )}
      </View>
    </View>
  );
};

interface StepProps {
  index: number;
  handleNext: () => void;
  done?: boolean;
  primaryText: string;
  secondaryText?: string;
}

const Step = ({
  index,
  handleNext,
  done,
  primaryText,
  secondaryText,
}: StepProps) => (
  <View style={{ marginTop: '10%' }}>
    <Text style={[styles.h1, { color: Colors.primary }]}>
      Step {index + 1}/3
    </Text>
    <TouchableOpacity
      disabled={done}
      style={styles.stepCard}
      onPress={handleNext}
    >
      <View>
        <Text style={styles.h1}>{primaryText}</Text>
        {secondaryText && <Text style={styles.h2}>{secondaryText}</Text>}
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
