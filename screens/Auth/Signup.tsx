import React from "react";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import FormInput, { FormProtectedInput } from "../../components/FormInput";
import HeaderWithBack from "../../components/HeaderWithBack";
import PrimaryActionButton from "../../components/PrimaryActionButton";
import { Text, View } from "../../components/Themed";

interface Props {}

const Signup = (props: Props): JSX.Element => {
  return (
    <View style={styles.container}>
      <HeaderWithBack title="Register">
        Signup for an account to start donating
      </HeaderWithBack>
      <View style={styles.formContainer}>
        <FormInput label="Full name" />
        <FormInput label="Email" textContentType="emailAddress" />
        <FormProtectedInput
          label="Password"
          placeholder="Must be at least 8 characters"
        />
        <View style={{ marginTop: 28 }}>
          <PrimaryActionButton>Start donating</PrimaryActionButton>
        </View>
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

export default Signup;
