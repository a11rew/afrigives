import PrimaryActionButton from '@components/PrimaryActionButton';
import Colors from '@constants/Colors';
import normalize from '@utils/normalize';
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

interface Props {
  dateSelectorShow: boolean;
  setDateSelectorShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const DonationDateModal: React.FC<Props> = ({
  dateSelectorShow,
  setDateSelectorShow,
}): JSX.Element => {
  const toggleShow = useSharedValue(0);
  const showAnimation = useAnimatedStyle(() => ({
    transform: [{ translateY: withTiming(toggleShow.value) }],
  }));

  useEffect(() => {
    if (dateSelectorShow) {
      toggleShow.value = 0;
    }
    if (!dateSelectorShow) {
      toggleShow.value = 400;
    }
  }, [dateSelectorShow, toggleShow]);

  return (
    <Animated.View style={[styles.container, showAnimation]}>
      <View>
        <Text style={styles.h1}>Choose a pickup date</Text>
        <Text style={styles.h2}>Must be within 7 days from today</Text>
      </View>
      <View>
        <View style={{ marginTop: '5%' }}>
          <Text style={styles.heading}>May 2021</Text>
        </View>
        <View
          style={{
            marginTop: '5%',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <DayCard day="Thursday" date={24} />
          <DayCard day="Thursday" date={24} />
          <DayCard day="Thursday" date={24} />
          <DayCard day="Thursday" date={24} />
          <DayCard day="Thursday" date={24} />
          <DayCard day="Thursday" date={24} />
          <DayCard day="Thursday" date={24} />
        </View>
      </View>
      <View>
        <Text
          style={{
            fontFamily: 'ps-bold',
            marginBottom: '5%',
          }}
        >
          We&apos;ll send a mail confirming your donation pickup request within
          the hour
        </Text>
        <PrimaryActionButton
          onPress={() => {
            toggleShow.value = 400;
            setDateSelectorShow(false);
          }}
        >
          Confirm preferred pickup date
        </PrimaryActionButton>
      </View>
    </Animated.View>
  );
};

interface DayCardProps {
  day: string;
  date: number;
}

const DayCard: React.FC<DayCardProps> = () => {
  return (
    <View>
      <Text
        style={{
          textAlign: 'center',
          marginBottom: normalize(16),
          fontFamily: 'ps-bold',
        }}
      >
        M
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={{ fontFamily: 'ps-bold' }}>25</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DonationDateModal;

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'rgba(12, 109, 61, 0.161)',
    borderRadius: 16,
    width: normalize(40),
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontFamily: 'ps-bold',
    color: Colors.primary,
  },
  h1: {
    textAlign: 'center',
    fontFamily: 'ps-bold',
    fontSize: normalize(16),
  },
  h2: {
    textAlign: 'center',
    fontFamily: 'ps-bold',
    opacity: 0.56,
    marginTop: 8,
  },
  container: {
    elevation: 60,
    shadowColor: 'black',
    height: '60%',
    backgroundColor: 'white',
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    width: '106%',
    paddingHorizontal: '3%',
    paddingTop: '3%',
    borderRadius: 18,
    alignSelf: 'center',
    marginHorizontal: 'auto',
    borderWidth: 0.5,
    borderColor: '#CCC',
    justifyContent: 'space-between',
    paddingVertical: '3%',
  },
});
