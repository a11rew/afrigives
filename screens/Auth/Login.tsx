import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import FormInput, { FormProtectedInput } from "../../components/FormInput";
import HeaderWithBack from "../../components/HeaderWithBack";
import PrimaryActionButton from "../../components/PrimaryActionButton";
import { Text, View } from "../../components/Themed";
import { useForm, Controller } from "react-hook-form";
import normalize from "../../utils/normalize";
import { useNavigation } from "@react-navigation/native";

interface Props {}

interface FormValues {
  email: string;
  password: string;
}

const Login = (props: Props): JSX.Element => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = (data: FormValues) => console.log(data);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <HeaderWithBack title="Login">Glad you're back</HeaderWithBack>
      <View style={styles.formContainer}>
        <Controller
          control={control}
          name="email"
          rules={{
            required: true,
            pattern: {
              value:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Must be a valid email address",
            },
          }}
          render={({ field: { onBlur, onChange, value } }) => (
            <FormInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              label="Email"
              textContentType="emailAddress"
              style={{ borderColor: errors.email ? "red" : "#CCC" }}
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
              style={{ borderColor: errors.password ? "red" : "#CCC" }}
            />
          )}
        />

        <View style={{ marginTop: 20 }}>
          <PrimaryActionButton onPress={handleSubmit(onSubmit)}>Start donating</PrimaryActionButton>
        </View>

        <TouchableOpacity style={{}}>
          <Text
            style={{
              fontFamily: "ps-bold",
              color: "#0C6D3D",
              textAlign: "center",
              fontSize: normalize(14),
              marginTop: normalize(36),
            }}
            onPress={() => navigation.navigate("ForgotPassword")}
          >
            Forgotten password?
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.tos}>
        <TouchableOpacity style={{}}>
          <Text
            style={{
              fontFamily: "ps-bold",
              color: "#0C6D3D",
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
    marginHorizontal: "4%",
    marginTop: "10%",
  },
  tos: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: "5%",
  },
});

export default Login;
