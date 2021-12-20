import { Image, StyleSheet } from "react-native";
import normalize from "../../utils/normalize";
import { View, Text } from "../Themed";

const SplashView: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Afrigives</Text>
      <Text style={styles.h2}>Community</Text>
      <Image
        style={styles.sprite_1}
        source={require("../../assets/sprites/splash_flower.png")}
      />
      <View style={styles.sprite_2}>
        <Image source={require("../../assets/sprites/splash_flower.png")} />
      </View>
      <Image
        style={styles.sprite_3}
        source={require("../../assets/sprites/splash_flower.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  h1: {
    fontFamily: "ps-bold",
    fontSize: normalize(40),
    color: "#0C6D3D",
  },
  h2: {
    fontFamily: "ps-bold",
    fontSize: normalize(16),
  },
  sprite_1: {
    position: "absolute",
    alignSelf: "center",
    bottom: normalize(-90),
  },
  sprite_2: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: -1,
    top: "25%",
    left: "-40%",
    justifyContent: "center",
    transform: [{ rotate: "90deg" }],
  },

  sprite_3: {
    position: "absolute",
    alignSelf: "flex-end",
    top: normalize(-30),
    right: normalize(-50),
    transform: [{ rotateX: "180deg" }],
  },
});

export default SplashView;
