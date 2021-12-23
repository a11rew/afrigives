import React, { useEffect, useState } from "react";
import {
  Button,
  Dimensions,
  Easing,
  Pressable,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Text, View } from "../../components/Themed";
import Icon from "react-native-vector-icons/AntDesign";
import normalize from "../../utils/normalize";
import PromoFirst from "./PromoFirst";
import PromoSecond from "./PromoSecond";
import PromoThird from "./PromoThird";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

interface Props {}

const Onbooarding = (props: Props): JSX.Element => {
  const navigation = useNavigation();
  const [position, setPosition] = useState(0);

  const animWidth = useSharedValue((39 / 100) * Dimensions.get("screen").width);
  const widthAnimate = useAnimatedStyle(() => ({
    width: withTiming(animWidth.value),
  }));

  const offset = useSharedValue(position);
  const offsetAnimate = useAnimatedStyle(() => ({
    transform: [{ translateX: withTiming(offset.value) }],
  }));

  const loginOpacity = useSharedValue(0);
  const loginAnimate = useAnimatedStyle(() => ({
    opacity: withTiming(loginOpacity.value),
  }));

  useEffect(() => {
    if (position === 2) {
      animWidth.value = (90 / 100) * Dimensions.get("screen").width;
      loginOpacity.value = 1;
    } else {
      animWidth.value = (39 / 100) * Dimensions.get("screen").width;
      loginOpacity.value = 0;
    }
  }, [position]);

  const moveForward = () => {
    if (position < 2) {
      setPosition((e) => {
        offset.value = -((e + 1) * Dimensions.get("screen").width);
        return e + 1;
      });
    }
  };

  const moveBackward = () => {
    if (position > 0) {
      setPosition((e) => {
        offset.value = (1 - e) * Dimensions.get("screen").width;
        return e - 1;
      });
    }
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[{ ...styles.carousel }, offsetAnimate]}>
        <PromoFirst />
        <PromoSecond />
        <PromoThird />
      </Animated.View>

      <View style={styles.carouselDots}>
        <CarouselDot active={position === 0} />
        <CarouselDot active={position === 1} />
        <CarouselDot active={position === 2} />
      </View>

      <View style={{ alignItems: "center" }}>
        <Animated.View style={[widthAnimate]}>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={
              position === 2
                ? () => {
                    navigation.navigate("Signup");
                  }
                : moveForward
            }
          >
            {position === 2 ? (
              <Text style={{ color: "white" }}>Register to donate</Text>
            ) : (
              <Icon name="arrowright" color="#fff" size={20} />
            )}
          </TouchableOpacity>
        </Animated.View>
        {/* <TouchableOpacity onPress={moveBackward} style={styles.actionButton}>
          <Text>Backwards</Text>
        </TouchableOpacity> */}
        <View>
          <Pressable
            disabled={position !== 2}
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Animated.Text style={[styles.loginText, loginAnimate]}>
              Already have an account? Login
            </Animated.Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const CarouselDot = ({ active }: { active?: boolean }) => (
  <View
    style={{
      ...styles.carouselDot,
      backgroundColor: active ? "#0C6D3D" : "#DDDDDD",
    }}
  />
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },

  h1: {
    fontFamily: "ps-bold",
    color: "#0C6D3D",
    paddingHorizontal: normalize(80),
    textAlign: "center",
    marginBottom: "15%",
  },

  carousel: {
    flexDirection: "row",
    // justifyContent: "center",
    backgroundColor: "red",
  },

  carouselDots: {
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: "7%",
    marginTop: "15%",
  },

  carouselDot: {
    width: normalize(12),
    height: normalize(12),
    marginRight: 12,
    borderRadius: 9999,
  },

  loginText: {
    fontFamily: "ps-bold",
    fontSize: normalize(16),
    marginTop: "12%",
  },

  actionButton: {
    backgroundColor: "#0C6D3D",
    paddingVertical: normalize(18),
    marginHorizontal: "auto",
    borderRadius: 8,
    alignItems: "center",
  },
});

export default Onbooarding;
