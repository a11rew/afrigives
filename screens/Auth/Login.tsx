import React from "react";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import FormInput, { FormProtectedInput } from "../../components/FormInput";
import HeaderWithBack from "../../components/HeaderWithBack";
import PrimaryActionButton from "../../components/PrimaryActionButton";
import { Text, View } from "../../components/Themed";
import normalize from "../../utils/normalize";

interface Props {}

const Login = (props: Props): JSX.Element => (
  <View style={styles.container}>
    <HeaderWithBack title="Login">Glad you're back</HeaderWithBack>
    <View style={styles.formContainer}>
      <FormInput label="Email" textContentType="emailAddress" />
      <FormProtectedInput label="Password" />
      <View style={{ marginTop: 20 }}>
        <PrimaryActionButton>Start donating</PrimaryActionButton>
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
