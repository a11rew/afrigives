import React from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { View, Text } from "./Themed";
import normalize from "../utils/normalize";
import PasswordHidden from "../assets/svgs/PasswordHidden";

interface Props extends TextInputProps {
  label: string;
}

const FormInput = ({ label, style, ...props }: Props) => {
  const offset = useSharedValue(10);
  const focusAnimation = useAnimatedStyle(() => ({
    transform: [{ translateX: withTiming(offset.value) }, { translateY: withTiming(offset.value) }],
  }));

  return (
    <View style={styles.container}>
      <View style={{ alignSelf: "flex-start", zIndex: 10 }}>
        <Animated.Text style={[styles.label, focusAnimation]}>{label}</Animated.Text>
      </View>
      <TextInput
        onFocus={() => (offset.value = 0)}
        onEndEditing={(e) => {
          if (!e.nativeEvent.text) {
            offset.value = 10;
          }
        }}
        placeholderTextColor="#3B3B3B"
        style={[styles.input, style]}
        {...props}
      />
    </View>
  );
};

export const FormProtectedInput = ({ label, style, ...props }: Props) => {
  const offset = useSharedValue(10);
  const focusAnimation = useAnimatedStyle(() => ({
    transform: [{ translateX: withTiming(offset.value) }, { translateY: withTiming(offset.value) }],
  }));

  return (
    <View style={styles.container}>
      <View style={{ alignSelf: "flex-start", zIndex: 10 }}>
        <Animated.Text style={[styles.label, focusAnimation]}>{label}</Animated.Text>
      </View>
      <View
        style={[
          {
            ...styles.input,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          },
        ]}
      >
        <TextInput
          onFocus={() => (offset.value = 0)}
          secureTextEntry
          textContentType="password"
          onEndEditing={(e) => {
            if (!e.nativeEvent.text) {
              offset.value = 10;
            }
          }}
          style={[{ width: "90%", fontFamily: "ps" }, style]}
          placeholderTextColor="#3B3B3B"
          {...props}
        />
        <PasswordHidden />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: normalize(20),
  },
  label: {
    fontFamily: "ps-bold",
    fontSize: normalize(14),
    color: "#0C6D3D",
    marginBottom: 2,
    zIndex: 10,
    backgroundColor: "white",
    paddingHorizontal: 8,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#CCCCCC",
    paddingVertical: normalize(8),
    paddingHorizontal: 16,
    fontFamily: "ps",
  },
});

export default FormInput;
