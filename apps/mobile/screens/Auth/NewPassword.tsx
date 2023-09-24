import { useSignIn } from '@clerk/clerk-expo';
import { FormProtectedInput } from '@components/FormInput';
import HeaderWithBack from '@components/HeaderWithBack';
import PrimaryActionButton from '@components/PrimaryActionButton';
import { Text, View } from '@components/Themed';
import { buildClerkErrorMessage } from '@utils/auth';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { StyleSheet } from 'react-native';
import { type AuthStackScreenProps } from '../../types';

type Props = AuthStackScreenProps<'NewPassword'>;

interface FormValues {
  password: string;
  confirmPassword: string;
}

const NewPassword = ({ route, navigation }: Props): JSX.Element => {
  const [resetError, setResetError] = useState<string | null>(null);
  const [resetLoading, setResetLoading] = useState(false);
  const { signIn, isLoaded, setActive } = useSignIn();

  const code = route.params.code;

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

  const onSubmit = async (values: FormValues) => {
    if (!isLoaded) return;
    setResetError(null);
    setResetLoading(true);

    try {
      const completeReset = await signIn.attemptFirstFactor({
        strategy: 'reset_password_email_code',
        code,
        password: values.password,
      });
      setResetLoading(false);

      await setActive({ session: completeReset.createdSessionId });
    } catch (error) {
      const errorMessage = buildClerkErrorMessage(error);
      setResetError(
        errorMessage === 'Is incorrect' ? 'Code is incorrect' : errorMessage
      );
      setResetLoading(false);
    }
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

        {errors.confirmPassword && (
          <Text style={styles.error}>Passwords must match</Text>
        )}

        {resetError && <Text style={styles.error}>{resetError}</Text>}

        <View style={{ marginTop: 20 }}>
          <PrimaryActionButton
            loading={resetLoading || !isLoaded}
            onPress={handleSubmit(onSubmit)}
          >
            Reset password
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
