import { isClerkAPIResponseError, useSignUp } from '@clerk/clerk-expo';
import FormInput, { FormProtectedInput } from '@components/FormInput';
import HeaderWithBack from '@components/HeaderWithBack';
import PrimaryActionButton from '@components/PrimaryActionButton';
import { Text, View } from '@components/Themed';
import { skipAuth } from '@store/authSlice';
import normalize from '@utils/normalize';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

interface FormValues {
  name: string;
  email: string;
  password: string;
}

const Signup = (): JSX.Element => {
  const dispatch = useDispatch();
  const { signUp, isLoaded, setActive } = useSignUp();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const [signUpError, setSignUpError] = useState<string | null>(null);
  const [signUpLoading, setSignUpLoading] = useState(false);

  const onSubmit = async (data: FormValues) => {
    setSignUpError(null);
    try {
      setSignUpLoading(true);
      if (!isLoaded) return;

      const [firstName, ...lastName] = data.name.split(' ');

      const completeSignIn = await signUp.create({
        firstName: firstName,
        lastName: lastName.join(' '),
        emailAddress: data.email,
        password: data.password,
      });

      setSignUpLoading(false);
      await setActive({ session: completeSignIn.createdSessionId });
    } catch (error) {
      if (isClerkAPIResponseError(error)) {
        const compositeErrorMessage = error.errors
          .map((e) => e.message)
          .join(', ')
          // Capitalize first letter
          .replace(/^\w/, (c) => c.toUpperCase());

        setSignUpError(compositeErrorMessage);
      } else {
        setSignUpError('Something went wrong. Please try again.');
      }
      setSignUpLoading(false);
    }
  };

  const onSkipAuth = () => {
    dispatch(skipAuth());
  };

  return (
    <View style={styles.container}>
      <HeaderWithBack title="Register">
        Signup for an account to start donating
      </HeaderWithBack>
      <View style={styles.formContainer}>
        <Controller
          control={control}
          name="name"
          rules={{
            required: true,
          }}
          render={({ field: { onBlur, onChange, value } }) => (
            <FormInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              label="Full name"
              style={{ borderColor: errors.name ? 'red' : '#CCC' }}
            />
          )}
        />

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
        {/* {errors.email && <Text style={styles.error}>{errors.email.message}</Text>} */}

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

        {signUpError && <Text style={styles.error}>{String(signUpError)}</Text>}

        <View style={{ marginTop: 20 }}>
          <PrimaryActionButton
            loading={signUpLoading || !isLoaded}
            onPress={handleSubmit(onSubmit)}
          >
            Start donating
          </PrimaryActionButton>
        </View>
        <View>
          <TouchableOpacity onPress={onSkipAuth}>
            <Text style={[styles.skipLoginText]}>
              Skip registration and preview app
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.tos}>
        <TouchableOpacity style={{}}>
          <Text
            style={{
              fontFamily: 'ps-bold',
              color: '#0C6D3D',
            }}
          >
            Terms of Service and Privacy Policy
          </Text>
        </TouchableOpacity>
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
  skipLoginText: {
    fontFamily: 'ps-bold',
    fontSize: normalize(14),
    marginTop: '12%',
    textAlign: 'center',
  },
});

export default Signup;
