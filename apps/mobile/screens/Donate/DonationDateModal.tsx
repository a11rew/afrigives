import PrimaryActionButton from '@components/PrimaryActionButton';
import { Text, View } from '@components/Themed';
import Colors from '@constants/Colors';
import normalize from '@utils/normalize';
import dayjs, { type Dayjs } from 'dayjs';
import React from 'react';
import { Modal, StyleSheet, TouchableOpacity } from 'react-native';

interface Props {
  dateSelectorShow: boolean;
  setDateSelectorShow: React.Dispatch<React.SetStateAction<boolean>>;
  selectedDate: string;
  setSelectedDate: React.Dispatch<React.SetStateAction<string>>;
}

const DonationDateModal: React.FC<Props> = ({
  dateSelectorShow,
  setDateSelectorShow,
}): JSX.Element => {
  const closeModal = () => setDateSelectorShow(false);

  return (
    <Modal
      hardwareAccelerated
      onRequestClose={closeModal}
      transparent
      visible={dateSelectorShow}
      animationType="slide"
    >
      <TouchableOpacity
        style={{ flex: 1 }}
        activeOpacity={1}
        onPress={closeModal}
      >
        <TouchableOpacity activeOpacity={1} style={styles.container}>
          <View>
            <Text style={styles.h1}>Choose a pickup date</Text>
            <Text style={styles.h2}>Must be within 7 days from today</Text>
          </View>
          <View>
            <View style={{ marginTop: '5%' }}>
              <Text style={styles.heading}>{dayjs().format('MMMM, YYYY')}</Text>
            </View>
            <View
              style={{
                marginTop: '5%',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              {[...Array(7)].map((_, idx) => {
                return <DayCard key={idx} day={dayjs().add(idx, 'day')} />;
              })}
            </View>
          </View>
          <View>
            <Text
              style={{
                fontFamily: 'ps-bold',
                marginBottom: '5%',
              }}
            >
              We&apos;ll send a mail confirming your donation pickup request
              within the hour
            </Text>
            <PrimaryActionButton
              onPress={() => {
                setDateSelectorShow(false);
              }}
            >
              Confirm preferred pickup date
            </PrimaryActionButton>
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

interface DayCardProps {
  day: Dayjs;
}

const DayCard: React.FC<DayCardProps> = ({ day }) => {
  // Check if card is for today
  const disabled = dayjs().isSame(day, 'day');

  return (
    <View>
      <Text
        style={{
          textAlign: 'center',
          marginBottom: normalize(16),
          fontFamily: 'ps-bold',
        }}
      >
        {day.format('dd')}
      </Text>
      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor: disabled
              ? 'transparent'
              : 'rgba(12, 109, 61, 0.161)',
          },
        ]}
        disabled={disabled}
      >
        <Text style={{ fontFamily: 'ps-bold', textAlign: 'center' }}>
          {day.format('D')}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default DonationDateModal;

const styles = StyleSheet.create({
  button: {
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
    height: '55%',
    backgroundColor: 'white',
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    width: '100%',
    paddingHorizontal: '3%',
    paddingTop: '5%',
    borderRadius: 18,
    alignSelf: 'center',
    marginHorizontal: 'auto',
    borderWidth: 0.5,
    borderColor: '#CCC',
    justifyContent: 'space-between',
    paddingVertical: '3%',
  },
});
