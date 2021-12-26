import React from "react";
import { Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import useColorScheme from "../hooks/useColorScheme";
import { RootTabParamList, RootTabScreenProps } from "../types";
import Colors from "../constants/Colors";

import HomeIcon from "../assets/tabIcons/Home.svg";

import TabOneScreen from "../screens/TabOneScreen";
import Donate from "../screens/Donate";
import Places from "../screens/Places";
import More from "../screens/More";

const BottomTab = createBottomTabNavigator<RootTabParamList>();

const BottomTabNavigator = () => {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={TabOneScreen}
        options={({ navigation }: RootTabScreenProps<"Home">) => ({
          title: "Home",
          tabBarIcon: ({ color, focused }) => <HomeIcon />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("Modal")}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="Donate"
        component={Donate}
        options={{
          title: "Donate",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Places"
        component={Places}
        options={{
          title: "Places",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="More"
        component={More}
        options={{
          title: "More",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
var TabBarIcon = (props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) => <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
