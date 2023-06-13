import FormInput from '@components/FormInput';
import HeaderWithBack from '@components/HeaderWithBack';
import PrimaryActionButton from '@components/PrimaryActionButton';
import { Text, View } from '@components/Themed';
import { useNavigation } from '@react-navigation/native';
import { supabase } from '@services/supabase';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { StyleSheet } from 'react-native';

interface FormValues {
  email: string;
}

const ForgotPassword = (): JSX.Element => {
  const [resetState, setResetState] =
    useState<
      Partial<{ loading: boolean; error: string | null; data: unknown }>
    >();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
    },
  });
  const navigation = useNavigation();

  console.log('resetState', resetState);

  const onSubmit = async (values: FormValues) => {
    setResetState((e) => ({ ...e, loading: true, error: null }));
    const { data, error } = await supabase.auth.api.resetPasswordForEmail(
      values.email
    );
    if (error) {
      setResetState((e) => ({ ...e, loading: false, error: error.message }));
      return;
    }
    setResetState((e) => ({ ...e, loading: false, data }));
    navigation.navigate('SentMailModal', { email: values.email });
  };
  return (
    <View style={styles.container}>
      <HeaderWithBack title="Forgot password?">
        That&apos;s okay. Enter the email you used for Afrigives. We&apos;ll
        send you a password reset link
      </HeaderWithBack>

      <View style={styles.formContainer}>
        <Controller
          control={control}
          name="email"
          rules={{
            required: true,
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: 'Must be a valid email address',
            },
          }}
          render={({ field: { onBlur, onChange, value } }) => (
            <FormInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              label="Email"
              textContentType="emailAddress"
              style={{ borderColor: errors.email ? 'red' : '#CCC' }}
            />
          )}
        />
        {resetState?.error && (
          <Text style={styles.error}>{resetState.error}</Text>
        )}

        <View style={{ marginTop: 20 }}>
          <PrimaryActionButton
            loading={resetState?.loading}
            onPress={handleSubmit(onSubmit)}
          >
            Send password reset link
          </PrimaryActionButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  formContainer: {
    marginHorizontal: '4%',
    marginTop: '10%',
  },
  tos: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: '5%',
  },
  error: {
    fontFamily: 'ps-bold',
    marginTop: -8,
    marginBottom: 4,
    paddingLeft: 4,
    color: '#ca6060',
  },
});

export default ForgotPassword;
