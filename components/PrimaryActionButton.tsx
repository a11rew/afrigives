import React from "react";
import { StyleSheet, TouchableOpacityProps } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Text } from "./Themed";
import normalize from "../utils/normalize";

type Props = TouchableOpacityProps;

const PrimaryActionButton: React.FC<Props> = ({ disabled, children, ...rest }) => (
  <TouchableOpacity
    style={{
      ...styles.button,
      backgroundColor: disabled ? "rgba(12, 109, 61, 0.4)" : "rgba(12, 109, 61, 1)",
    }}
    {...(rest as any)}
  >
    <Text style={styles.text}>{children}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  text: {
    fontFamily: "ps-bold",
    fontSize: normalize(14),
    color: "white",
  },
  button: {
    backgroundColor: "#0C6D3D",
    paddingVertical: normalize(18),
    marginHorizontal: "auto",
    borderRadius: 8,
    alignItems: "center",
  },
});

export default PrimaryActionButton;
