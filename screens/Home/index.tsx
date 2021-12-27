import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";
import normalize from "../../utils/normalize";
import DonationCategories from "./DonationCategories";
import DonationGroup from "./DonationGroup";

interface Props {}

const Home = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.donation}>
        <DonationGroup />
      </View>
      <View style={styles.donationCategories}>
        <DonationCategories />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: "3%",
    paddingTop: normalize(16),
  },
  donation: {},
  donationCategories: {
    marginTop: "8%",
  },
});

export default Home;
