import React from "react";
import { StyleSheet } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import PromoFirst from "./PromoFirst";
import PromoSecond from "./PromoSecond";
import PromoThird from "./PromoThird";

interface Props {
  position: number;
  offsetAnimate: {
    transform: {
      translateX: number;
    }[];
  };
}

const PromoView = ({ position, offsetAnimate }: Props) => (
  <Animated.View style={[{ ...styles.carousel }, offsetAnimate]}>
    <PromoFirst />
    <PromoSecond />
    <PromoThird />
  </Animated.View>
);

const styles = StyleSheet.create({
  carousel: {
    flexDirection: "row",
    // justifyContent: "center",
    backgroundColor: "red",
  },
});

export default PromoView;
