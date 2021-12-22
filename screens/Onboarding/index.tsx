import React, { useState } from "react";
import { StyleSheet } from "react-native";
import Animated, { useSharedValue } from "react-native-reanimated";
import {
  useSafeAreaFrame,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { Text, View } from "../../components/Themed";
import normalize from "../../utils/normalize";

interface Props {}

const Onbooarding = (props: Props): JSX.Element => {
  const frame = useSafeAreaFrame();
  const inset = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <Animated.Text
        style={{
          ...styles.h1,
          transform: [{ translateY: -((frame.height - inset.top) / 2.3) }],
        }}
      >
        Afrigives
      </Animated.Text>
      <Text style={styles.h2}>Hidden</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  h1: {
    fontFamily: "ps-bold",
    fontSize: normalize(40),
    color: "#0C6D3D",
  },
  h2: {
    fontFamily: "ps-bold",
    fontSize: normalize(16),
    opacity: 0,
  },
});

export default Onbooarding;
