import React from "react";
import { StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { FormProtectedInput } from "../../components/FormInput";
import HeaderWithBack from "../../components/HeaderWithBack";
import { View } from "../../components/Themed";
import PrimaryActionButton from "../../components/PrimaryActionButton";

interface Props {}

interface FormValues {
  email: string;
}

const NewPassword = (props: Props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  console.log(errors);
  const onSubmit = (data: FormValues) => console.log(data);
  return (
    <View style={styles.container}>
      <HeaderWithBack title="New password?">Choose new login password</HeaderWithBack>

      <View style={styles.formContainer}>
        <Controller
          control={control}
          name="password"
          rules={{
            required: true,
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          }}
          render={({ field: { onBlur, onChange, value } }) => (
            <FormProtectedInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              label="Password"
              placeholder="Must be at least 8 characters"
              style={{ borderColor: errors.password ? "red" : "#CCC" }}
            />
          )}
        />
        <Controller
          control={control}
          name="confirmPassword"
          rules={{
            required: true,
            validate: (value) => value === getValues("password"),
          }}
          render={({ field: { onBlur, onChange, value } }) => (
            <FormProtectedInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              label="Confirm password"
              placeholder="Must match password"
              style={{ borderColor: errors.confirmPassword ? "red" : "#CCC" }}
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

export default NewPassword;
