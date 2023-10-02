import FormInput from '@components/FormInput';
import PrimaryActionButton from '@components/PrimaryActionButton';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Image, Platform, Pressable, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Text, View } from '../../components/Themed';
import { type AuthStackScreenProps } from '../../types';
import normalize from '../../utils/normalize';

type Props = AuthStackScreenProps<'SentMailModal'>;

const SentMailModal: React.FC<Props> = ({ route }) => {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      code: '',
    },
  });

  const [error, setError] = useState<string | null>(null);

  const onSubmit = (values: { code: string }) => {
    setError(null);

    navigation.navigate('NewPassword', { code: values.code });
  };

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
          We sent a password recovery code to {route.params.email}.
        </Text>
        <Text style={styles.h2}>
          Enter the code below to reset your password
        </Text>
      </View>

      <View style={styles.formContainer}>
        <Controller
          control={control}
          name="code"
          rules={{
            required: true,
          }}
          render={({ field: { onBlur, onChange, value } }) => (
            <FormInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              label="Code"
              textContentType="oneTimeCode"
              keyboardType="number-pad"
              style={{ borderColor: errors.code ? 'red' : '#CCC' }}
            />
          )}
        />
        {error && <Text style={styles.error}>{error}</Text>}

        <View style={{ marginTop: 20 }}>
          <PrimaryActionButton onPress={handleSubmit(onSubmit)}>
            Reset password
          </PrimaryActionButton>
        </View>
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
  formContainer: {
    marginHorizontal: '4%',
    marginTop: '10%',
  },
  backButton: {
    width: 64,
    height: 64,
    justifyContent: 'center',
  },
  logo: {
    fontFamily: 'sg-bold',
    fontSize: 24,
    color: '#0C6D3D',
    textAlign: 'center',
  },
  h1: {
    fontFamily: 'sg-bold',
    paddingHorizontal: normalize(50),
    textAlign: 'center',
  },
  h2: {
    fontFamily: 'sg-bold',
    marginTop: 8,
    textAlign: 'center',
  },
  error: {
    fontFamily: 'sg-bold',
    marginTop: -8,
    marginBottom: 4,
    paddingLeft: 4,
    color: '#ca6060',
  },
});

export default SentMailModal;
