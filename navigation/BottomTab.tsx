import React from "react";
import { Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import useColorScheme from "../hooks/useColorScheme";
import { RootTabParamList, RootTabScreenProps } from "../types";
import Colors from "../constants/Colors";

import HomeIcon from "../assets/tabIcons/Home.svg";
import HeartIcon from "../assets/tabIcons/Heart.svg";
import PlacesIcon from "../assets/tabIcons/Places.svg";
import MoreIcon from "../assets/tabIcons/More.svg";

import TabOneScreen from "../screens/TabOneScreen";
import Donate from "../screens/Donate";
import Places from "../screens/Places";
import More from "../screens/More";
import HomeHeader from "../screens/Home/Header";
import normalize from "../utils/normalize";
import Home from "../screens/Home";

const BottomTab = createBottomTabNavigator<RootTabParamList>();

const BottomTabNavigator = () => {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#0C6D3D",
        tabBarStyle: {
          minHeight: "8%",
          paddingTop: 10,
          paddingBottom: 10,
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          fontSize: normalize(14),
          fontFamily: "ps-bold",
        },
        tabBarHideOnKeyboard: true,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={({ navigation }: RootTabScreenProps<"Home">) => ({
          header: HomeHeader,
          tabBarIcon: ({ color, focused }) => (
            <HomeIcon
              stroke={color}
              fill={focused ? color : undefined}
              /** Mapped to variable names ["#001" , "#002"] in .svgrrc that are replaced in the svg at runtime
               * Used here to achieve inner and outer paths changing color appropriately
               */
              inner={focused ? "#fff" : Colors[colorScheme].tabIconDefault}
              outer={
                focused ? Colors[colorScheme].tabIconSelected : Colors[colorScheme].tabIconDefault
              }
            />
          ),
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
          tabBarIcon: ({ color, focused }) => (
            <HeartIcon
              color={color}
              stroke={color}
              fill={focused ? color : undefined}
              /** Mapped to variable names ["#001" , "#002"] in .svgrrc that are replaced in the svg at runtime
               * Used here to achieve inner and outer paths changing color appropriately
               */
              inner={focused ? "#fff" : Colors[colorScheme].tabIconDefault}
              outer={
                focused ? Colors[colorScheme].tabIconSelected : Colors[colorScheme].tabIconDefault
              }
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Places"
        component={Places}
        options={{
          title: "Places",
          tabBarIcon: ({ color, focused }) => (
            <PlacesIcon
              color={color}
              stroke={color}
              fill={focused ? color : undefined}
              /** Mapped to variable names ["#001" , "#002"] in .svgrrc that are replaced in the svg at runtime
               * Used here to achieve inner and outer paths changing color appropriately
               */
              inner={focused ? "#fff" : Colors[colorScheme].tabIconDefault}
              outer={
                focused ? Colors[colorScheme].tabIconSelected : Colors[colorScheme].tabIconDefault
              }
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="More"
        component={More}
        options={{
          title: "More",
          tabBarIcon: ({ color, focused }) => (
            <MoreIcon
              color={color}
              stroke={color}
              fill={focused ? color : undefined}
              /** Mapped to variable names ["#001" , "#002"] in .svgrrc that are replaced in the svg at runtime
               * Used here to achieve inner and outer paths changing color appropriately
               */
              inner={focused ? "#fff" : Colors[colorScheme].tabIconDefault}
              outer={
                focused ? Colors[colorScheme].tabIconSelected : Colors[colorScheme].tabIconDefault
              }
            />
          ),
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
