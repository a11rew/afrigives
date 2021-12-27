import React from "react";
import {
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import normalize from "../../utils/normalize";
import { View, Text } from "../../components/Themed";
import { AntDesign } from "@expo/vector-icons";

interface Props {}

const categories = [
  {
    name: "Uniform For Kids Campaign",
    locale: "Nigeria",
    image: require("../../assets/stock/ufk-full.jpeg"),
    id: 1,
  },
  {
    name: "Clothe the Old Campaign",
    locale: "Botswana",
    image: require("../../assets/stock/wmn-full.png"),
    id: 2,
  },
  {
    name: "Jalabunga Wildfire Relief",
    locale: "Kenya",
    image: require("../../assets/stock/wrf-full.png"),
    id: 3,
  },
];

const PopularCampaigns = (props: Props) => {
  return (
    <View>
      <Text style={styles.h1}>Donation Categories</Text>
      {categories.map((item) => (
        <CampaignCard key={item.id} image={item.image} name={item.name} locale={item.locale} />
      ))}
    </View>
  );
};

interface CategoryProps {
  name: string;
  locale: string;
  image: any;
}

const CampaignCard = ({ image, locale, name }: CategoryProps) => {
  return (
    <View style={styles.cardContainer}>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.labelContainer}>
          <View style={{ backgroundColor: "transparent" }}>
            <Text style={styles.h2}>{locale}</Text>
            <Text style={styles.h3}>{name}</Text>
          </View>
          <Pressable>
            <AntDesign name="arrowright" size={24} color="white" />
          </Pressable>
        </View>
      </ImageBackground>

      <View style={styles.bgCardContainer}>
        <View style={styles.bgCard} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  cardContainer: {
    marginBottom: 24,
  },
  spriteContainer: {
    padding: normalize(16),
    borderRadius: normalize(16),
    marginRight: normalize(16),
    alignItems: "center",
    justifyContent: "center",
  },
  h1: {
    fontFamily: "ps-bold",
    fontSize: normalize(16),
    marginBottom: normalize(16),
  },
  image: {
    height: normalize(228),
    borderRadius: 16,
    overflow: "hidden",
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  h2: {
    fontFamily: "ps-bold",
    fontSize: normalize(20),
    lineHeight: normalize(24),
    color: "white",
  },
  h3: {
    fontFamily: "ps",
    fontSize: normalize(14),
    color: "white",
  },
  labelContainer: {
    backgroundColor: "#0C6D3D8F",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    paddingVertical: normalize(16),
    paddingHorizontal: normalize(24),
    zIndex: 10,
  },
  bgCard: {
    width: "97%",
    height: "100%",
    paddingHorizontal: "3%",
    borderRadius: 16,
    backgroundColor: "#0C6D3D8F",
  },
  bgCardContainer: {
    position: "absolute",
    zIndex: -1,
    alignItems: "center",
    height: "100%",
    width: "100%",
    transform: [{ translateY: 8 }],
  },
  list: {
    // width: "70%",
  },
  button: {
    backgroundColor: "#0C6D3D",
    borderRadius: 16,
    height: "40%",
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: normalize(24),
  },
});

export default PopularCampaigns;
