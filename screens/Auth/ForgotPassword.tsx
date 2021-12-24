import React from "react";
import { StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form";
import FormInput from "../../components/FormInput";
import HeaderWithBack from "../../components/HeaderWithBack";
import { View } from "../../components/Themed";
import PrimaryActionButton from "../../components/PrimaryActionButton";

interface Props {}

interface FormValues {
  email: string;
}

const ForgotPassword = (props: Props) => {
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
  return (
    <View style={styles.container}>
      <HeaderWithBack title="Forgot password?">
        That's okay. Enter the email used for Afrigives. We'll send you a password reset link
      </HeaderWithBack>

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

        <View style={{ marginTop: 20 }}>
          <PrimaryActionButton onPress={handleSubmit(onSubmit)}>
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
    marginHorizontal: "4%",
    marginTop: "10%",
  },
  tos: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: "5%",
  },
  error: {
    fontFamily: "ps-bold",
    marginTop: -8,
    marginBottom: 4,
    paddingLeft: 4,
    // color: "red",
  },
});

export default ForgotPassword;
