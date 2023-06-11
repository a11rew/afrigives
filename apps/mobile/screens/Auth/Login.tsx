import { StyleSheet, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import FormInput, { FormProtectedInput } from '@components/FormInput';
import HeaderWithBack from '@components/HeaderWithBack';
import PrimaryActionButton from '@components/PrimaryActionButton';
import { Text, View } from '@components/Themed';
import normalize from '@utils/normalize';

import { RootState } from '@store/index';
import { skipAuth, supabaseSignIn } from '@store/authSlice';

interface FormValues {
  email: string;
  password: string;
}

const Login = (): JSX.Element => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const dispatch = useDispatch();
  const { error, loading } = useSelector((state: RootState) => state.auth);

  const onSubmit = (data: FormValues) => {
    dispatch(supabaseSignIn(data));
  };

  const onSkipAuth = () => {
    dispatch(skipAuth());
  };

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <HeaderWithBack title="Login">Glad you&apos;re back</HeaderWithBack>
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

        <Controller
          control={control}
          name="password"
          rules={{
            required: true,
            // minLength: {
            //   value: 8,
            //   message: "Password must be at least 8 characters",
            // },
          }}
          render={({ field: { onBlur, onChange, value } }) => (
            <FormProtectedInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              label="Password"
              style={{ borderColor: errors.password ? 'red' : '#CCC' }}
            />
          )}
        />
        {error.signIn && <Text style={styles.error}>{error.signIn}</Text>}

        <View style={{ marginTop: 20 }}>
          <PrimaryActionButton
            loading={loading}
            onPress={handleSubmit(onSubmit)}
          >
            Start donating
          </PrimaryActionButton>
        </View>

        <TouchableOpacity style={{}}>
          <Text
            style={{
              fontFamily: 'ps-bold',
              color: '#0C6D3D',
              textAlign: 'center',
              fontSize: normalize(14),
              marginTop: normalize(36),
            }}
            onPress={() => navigation.navigate('ForgotPassword')}
          >
            Forgotten password?
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity onPress={onSkipAuth}>
          <Text style={[styles.skipLoginText]}>
            Skip registration and preview app
          </Text>
        </TouchableOpacity>
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

export default Login;
