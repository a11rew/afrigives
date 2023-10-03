import PrimaryActionButton from '@components/PrimaryActionButton';
import { Text, View } from '@components/Themed';
import Colors from '@constants/Colors';
import normalize from '@utils/normalize';
import React, { useState } from 'react';
import {
  Image,
  Linking,
  Modal,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

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
          style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' }}
          activeOpacity={1}
          onPress={closeModal}
        >
          <TouchableOpacity activeOpacity={1} style={styles.container}>
            <View>
              <View style={styles.imageContainer}>
                <Image
                  style={{
                    resizeMode: 'contain',
                    height: normalize(64),
                    aspectRatio: 1,
                  }}
                  source={require('../assets/sprites/check.png')}
                />
              </View>

              <View
                style={{
                  paddingTop: '5%',
                }}
              >
                <View style={{ alignItems: 'center' }}>
                  <Text style={styles.heading}>
                    Thanks for trying out the Afrigives app!
                  </Text>
                  <Text
                    style={[
                      styles.text,
                      {
                        marginTop: normalize(8),
                        marginBottom: normalize(24),
                      },
                    ]}
                  >
                    This is a prototype however, and we are not accepting
                    donations.
                  </Text>
                </View>

                <PrimaryActionButton
                  onPress={closeModal}
                  style={{
                    marginTop: normalize(12),
                  }}
                >
                  Ok, got it
                </PrimaryActionButton>
              </View>
            </View>

            <View
              style={{
                borderBottomColor: '#3B3B3B29',
                borderBottomWidth: 1,
                marginVertical: '10%',
              }}
            />

            <View
              style={{
                paddingBottom: '10%',
              }}
            >
              <Text style={styles.text}>
                We would love to work with a willing charity
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: normalize(2),
                }}
              >
                <Text style={styles.text}> to bring this to life. </Text>
                <TouchableOpacity
                  onPress={() => {
                    Linking.openURL(
                      'mailto:andrewglago1@gmail.com?cc=ikiliagwueloke@gmail.com&subject=Reaching%20out%20about%20Afrigives'
                    );
                  }}
                >
                  <Text
                    style={[
                      {
                        fontFamily: 'ps-bold',
                        textAlign: 'center',
                        color: Colors.primary,
                        textDecorationLine: 'underline',
                      },
                    ]}
                  >
                    Contact us
                  </Text>
                </TouchableOpacity>
              </View>
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
    fontSize: normalize(16),
  },
  h1: {
    textAlign: 'center',
    fontFamily: 'ps-bold',
    fontSize: normalize(16),
    marginVertical: 8,
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
  text: {
    textAlign: 'center',
    fontFamily: 'ps',
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 24,
    lineHeight: 30,
  },
});
