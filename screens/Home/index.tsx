import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";
import normalize from "../../utils/normalize";
import DonationCategories from "./DonationCategories";
import DonationGroup from "./DonationGroup";
import PopularCampaigns from "./PopularCampaigns";

interface Props {}

const Home = (props: Props) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.donation}>
        <DonationGroup />
      </View>
      <View style={styles.donationCategories}>
        <DonationCategories />
      </View>
      <View style={styles.popularCampaigns}>
        <PopularCampaigns />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: normalize(16),
    backgroundColor: "white",
  },
  donation: {
    paddingHorizontal: "3%",
  },
  donationCategories: {
    marginTop: "8%",
    paddingLeft: "3%",
  },
  popularCampaigns: {
    paddingHorizontal: "3%",

    marginTop: "8%",
  },
});

export default Home;
