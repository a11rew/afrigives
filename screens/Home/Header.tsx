import * as React from "react";
import { StyleSheet, StatusBar, Image } from "react-native";
import { View, Text } from "../../components/Themed";

import Notif from "../../assets/svgs/Notif.svg";
import normalize from "../../utils/normalize";

// @refresh reset
export default function HomeHeader(): React.ReactElement {
  return (
    <View style={styles.container}>
      <View style={styles.greeting}>
        <Image style={styles.avatar} source={require("../../assets/images/male.png")} />
        <View>
          <Text style={styles.greetingText}>Hi, Eloke</Text>
          <View style={styles.period}>
            <Text style={styles.periodText}>Welcome 👋🏿</Text>
          </View>
        </View>
      </View>

      <View>
        <Notif />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: "3%",
    // Really never undefined in practice but could be useful on Ios where
    // StatusBar.currentHeight is not supported
    paddingTop: (StatusBar.currentHeight || 24) * 1.5,
    paddingBottom: "3%",
  },
  avatar: {
    width: normalize(43),
    aspectRatio: 1,
    marginRight: normalize(14),
    borderRadius: 99999,
  },
  greeting: {
    flexDirection: "row",
    alignItems: "center",
  },
  greetingText: {
    fontSize: normalize(16),
    fontFamily: "ps-bold",
  },
  period: {
    flexDirection: "row",
    alignItems: "center",
  },
  periodText: {
    fontSize: normalize(14),
    fontFamily: "ps-bold",
    marginRight: 8,
    opacity: 0.56,
  },
});

type Greeting = "Morning" | "Afternoon" | "Evening";

function greeting(hours: number): Greeting {
  if (hours < 0 || hours > 23) {
    throw new Error(`The value ${hours} is not valid`);
  }
  if (hours < 12) {
    return "Morning";
  }

  if (hours < 17) {
    return "Afternoon";
  }

  return "Evening";
}
