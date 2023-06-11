import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

import { FormProtectedInput } from '@components/FormInput';
import HeaderWithBack from '@components/HeaderWithBack';
import { View, Text } from '@components/Themed';
import { supabase } from '@services/supabase';
import PrimaryActionButton from '@components/PrimaryActionButton';
import parseAuthString from '@utils/parseAuthString';

import { AuthStackScreenProps } from '../../types';

type Props = AuthStackScreenProps<'NewPassword'>;

interface FormValues {
  password: string;
  confirmPassword: string;
}

const NewPassword = ({ route, navigation }: Props): JSX.Element => {
  const [resetState, setResetState] =
    useState<
      Partial<{ loading: boolean; error: string | null; data: unknown }>
    >();

  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  useEffect(() => {
    if (
      !route.path?.match('newpass/#') ||
      !route.path?.match('type=recovery')
    ) {
      navigation.navigate('Signup');
    }
  }, []);

  const queryParams = parseAuthString(route.path!);

  const onSubmit = async (values: FormValues) => {
    setResetState((e) => ({ ...e, loading: true, error: null }));

    const { error, data } = await supabase.auth.api.updateUser(
      String(queryParams.access_token),
      {
        password: values.password,
      }
    );

    if (error) {
      setResetState((e) => ({ ...e, loading: false, error: error.message }));
      return;
    }
    setResetState((e) => ({ ...e, loading: false, data }));
    navigation.navigate('Login');
  };
  return (
    <View style={styles.container}>
      <HeaderWithBack title="New password?">
        Choose new login password
      </HeaderWithBack>

      <View style={styles.formContainer}>
        <Controller
          control={control}
          name="password"
          rules={{
            required: true,
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters',
            },
          }}
          render={({ field: { onBlur, onChange, value } }) => (
            <FormProtectedInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              label="Password"
              placeholder="Must be at least 8 characters"
              style={{ borderColor: errors.password ? 'red' : '#CCC' }}
            />
          )}
        />
        <Controller
          control={control}
          name="confirmPassword"
          rules={{
            required: true,
            validate: (value) => value === getValues('password'),
          }}
          render={({ field: { onBlur, onChange, value } }) => (
            <FormProtectedInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              label="Confirm password"
              placeholder="Must match password"
              style={{ borderColor: errors.confirmPassword ? 'red' : '#CCC' }}
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

export default NewPassword;
