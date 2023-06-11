import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Pressable, Image } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import React from 'react';
import normalize from '../../utils/normalize';
import { Text, View } from '../../components/Themed';
import { AuthStackScreenProps } from '../../types';

type Props = AuthStackScreenProps<'SentMailModal'>;

const SentMailModal: React.FC<Props> = ({ route }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.backContainer}>
        <Pressable
          style={styles.backButton}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Icon name="close" color="gray" size={24} />
        </Pressable>
      </View>
      <View style={{ alignItems: 'center' }}>
        <Image source={require('../../assets/sprites/mail.png')} />
      </View>
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>Check your mail</Text>

        <Text style={styles.h1}>
          We sent a password recovery link to {route.params.email}. Follow the
          link in the email to reset your password
        </Text>
      </View>
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    paddingTop: '5%',
  },

  logoContainer: {
    position: 'relative',
    marginTop: 20,
    marginBottom: 10,
    alignItems: 'center',
  },

  backContainer: {
    alignItems: 'flex-end',
  },

  backButton: {
    width: 100,
    justifyContent: 'center',
  },

  logo: {
    fontFamily: 'ps-bold',
    fontSize: 24,
    color: '#0C6D3D',
    textAlign: 'center',
  },

  h1: {
    fontFamily: 'ps-bold',
    paddingHorizontal: normalize(50),
    textAlign: 'center',
  },
});

export default SentMailModal;
