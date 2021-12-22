import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "../../components/Themed";
import Icon from "react-native-vector-icons/AntDesign";
import normalize from "../../utils/normalize";
import PromoFirst from "./PromoFirst";

interface Props {}

const Onbooarding = (props: Props): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>
        Donate clothes easily to countries across Africa
      </Text>

      <View>
        <PromoFirst />
      </View>

      <View style={styles.carousel}>
        <CarouselDot active />
        <CarouselDot />
        <CarouselDot />
      </View>

      <View style={{ alignItems: "center" }}>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="arrowright" color="#fff" size={20} />
        </TouchableOpacity>
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
    marginBottom: normalize(97),
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

export default Onbooarding;
