import React from "react";
import { Text, View } from "../../components/Themed";
import HomeHeader from "./Header";

interface Props {}

const Home = (props: Props) => {
  return (
    <View>
      <Text>Home</Text>
      <HomeHeader />
    </View>
  );
};

export default Home;
