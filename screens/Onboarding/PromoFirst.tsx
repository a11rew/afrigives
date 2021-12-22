import React from "react";
import { Image, StyleSheet } from "react-native";
import { View, Text } from "../../components/Themed";
import normalize from "../../utils/normalize";

interface Props {}

const PromoFirst = (props: Props) => {
  return (
    <View style={styles.centerContainer}>
      <View style={styles.center}>
        <View style={{ position: "relative" }}>
          <Image
            style={{ zIndex: -10 }}
            resizeMode="cover"
            source={require("../../assets/sprites/center.png")}
          ></Image>
          <Image
            style={styles.promoImage}
            resizeMode="cover"
            source={require("../../assets/stock/ufk.jpeg")}
          />
        </View>
        <Image
          style={{
            position: "absolute",
            resizeMode: "contain",
            height: normalize(314),
            aspectRatio: 1,
            bottom: -5,
          }}
          source={require("../../assets/sprites/arms/arm1.png")}
        />
      </View>

      <View style={styles.promoText}>
        <Text style={styles.promoH1}>Photo: Uniform for Kids Campaign</Text>
        <Text style={styles.promoH2}>$2,335 in worth donated</Text>
      </View>
    </View>
  );
};

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
    marginBottom: normalize(97),
  },
  h2: {
    fontFamily: "ps-bold",
    fontSize: normalize(16),
    opacity: 0,
  },
  centerContainer: {
    position: "relative",
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  center: {
    position: "relative",
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
    height: normalize(314),
  },

  promoImage: {
    height: normalize(45),
    width: normalize(45),
    aspectRatio: 1,
    borderRadius: 999999,
    position: "absolute",
    top: normalize(40),
    right: 0,
    borderWidth: 2,
    borderColor: "white",
  },

  promoText: {
    marginTop: normalize(48),
  },

  promoH1: {
    textAlign: "center",
    fontFamily: "ps-bold",
    marginBottom: 2,
  },

  promoH2: {
    color: "#0C6D3D",
    textAlign: "center",
    fontFamily: "ps-bold",
  },

  carousel: {
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: normalize(32),
    marginTop: normalize(84),
  },

  carouselDot: {
    width: normalize(12),
    height: normalize(12),
    marginRight: 12,
    borderRadius: 9999,
  },

  actionButton: {
    backgroundColor: "#0C6D3D",
    paddingVertical: normalize(18),
    width: "39%",
    marginHorizontal: "auto",
    borderRadius: 8,
    alignItems: "center",
  },
});

export default PromoFirst;
