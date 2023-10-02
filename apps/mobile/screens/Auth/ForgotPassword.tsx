import { isClerkAPIResponseError, useSignIn } from '@clerk/clerk-expo';
import FormInput from '@components/FormInput';
import HeaderWithBack from '@components/HeaderWithBack';
import PrimaryActionButton from '@components/PrimaryActionButton';
import { Text, View } from '@components/Themed';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { StyleSheet } from 'react-native';

interface FormValues {
  email: string;
}

const ForgotPassword = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
  const { signIn, isLoaded } = useSignIn();

  const onSubmit = async (values: FormValues) => {
    if (!isLoaded) return;
    setError(null);
    setIsLoading(true);

    try {
      await signIn.create({
        identifier: values.email,
        strategy: 'reset_password_email_code',
      });

      setIsLoading(false);

      navigation.navigate('SentMailModal', { email: values.email });
    } catch (error) {
      if (isClerkAPIResponseError(error)) {
        const compositeErrorMessage = error.errors
          .map((e) => e.message)
          .join(', ')
          // Capitalize first letter
          .replace(/^\w/, (c) => c.toUpperCase());

        setError(compositeErrorMessage);
      } else {
        setError('Something went wrong. Please try again.');
      }

      setIsLoading(false);
    }
  };
  return (
    <View style={styles.container}>
      <HeaderWithBack title="Forgot password?">
        That&apos;s okay. Enter the email you used for Afrigives. We&apos;ll
        send you a password reset code
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
        {error && <Text style={styles.error}>{error}</Text>}

        <View style={{ marginTop: 20 }}>
          <PrimaryActionButton
            loading={isLoading || !isLoaded}
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
    fontFamily: 'sg-bold',
    marginTop: -8,
    marginBottom: 4,
    paddingLeft: 4,
    color: '#ca6060',
  },
});

export default ForgotPassword;
