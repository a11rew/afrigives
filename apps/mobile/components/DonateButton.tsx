import PrimaryActionButton from '@components/PrimaryActionButton';
import { Text, View } from '@components/Themed';
import Colors from '@constants/Colors';
import normalize from '@utils/normalize';
import React, { useState } from 'react';
import { Modal, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

interface Props extends React.ComponentProps<typeof PrimaryActionButton> {
  children?: string;
}

const DonateButton = ({ children, ...rest }: Props) => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);

  return (
    <>
      <PrimaryActionButton onPress={openModal} {...rest}>
        {children ?? 'Donate'}
      </PrimaryActionButton>
      <Modal
        hardwareAccelerated
        onRequestClose={closeModal}
        transparent
        visible={showModal}
        animationType="slide"
      >
        <TouchableOpacity
          style={{ flex: 1 }}
          activeOpacity={1}
          onPress={closeModal}
        >
          <TouchableOpacity activeOpacity={1} style={styles.container}>
            <View>
              <Text style={styles.h1}>Thank you for exploring Afrigives!</Text>

              <ScrollView>
                <Text
                  style={{
                    fontFamily: 'ps-bold',
                    marginTop: '5%',
                  }}
                >
                  We appreciate your interest in our app, Afrigives. \n\nIt's
                  been a pleasure to have you here on this journey of discovery
                  and potential change. Our aim is to transform this concept
                  into a reality, but we need your support to make it happen.
                  How Can You Help? If you represent an NGO (Non-Governmental
                  Organization) dedicated to making a difference in Africa, we
                  want to hear from you! Afrigives is eager to collaborate with
                  organizations like yours to turn this innovative idea into a
                  powerful tool for change. Get in Touch Please reach out to us,
                  and let's explore how we can work together to bring Afrigives
                  to life and amplify your charitable efforts. Together, we can
                  create a meaningful impact in communities across Africa.
                  Contact Us: Email: [Your Contact Email] Phone: [Your Contact
                  Phone Number] We sincerely thank you for your time and
                  enthusiasm. Let's join forces to make a positive difference in
                  the world. - Andrew and Eloke, Creators of Afrigives
                </Text>
              </ScrollView>
            </View>

            <View>
              <PrimaryActionButton onPress={closeModal}>
                Ok, got it
              </PrimaryActionButton>
            </View>
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    </>
  );
};

export default DonateButton;

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
