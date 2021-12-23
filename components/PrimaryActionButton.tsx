import React from "react";
import { StyleSheet, TouchableOpacityProps } from "react-native";
import { Text } from "./Themed";
import { TouchableOpacity } from "react-native-gesture-handler";
import normalize from "../utils/normalize";

interface Props extends TouchableOpacityProps {}

const PrimaryActionButton: React.FC<Props> = ({
  disabled,
  children,
  ...rest
}) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        backgroundColor: disabled
          ? "rgba(12, 109, 61, 0.4)"
          : "rgba(12, 109, 61, 1)",
      }}
      {...(rest as any)}
    >
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

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
