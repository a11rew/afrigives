import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState } from "react";
import { View } from "../Themed";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import Onbooarding from "../../screens/Onboarding";
import SplashView from "./SplashView";

const Stack = createSharedElementStackNavigator();

const SplashStack = ({ children }: { children: React.ReactNode }) => {
  return (
    <Stack.Navigator
      initialRouteName="SplashView"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="SplashView" component={SplashView} />
      <Stack.Screen
        name="SplashOnboard"
        component={Onbooarding}
        sharedElements={() => [
          {
            id: "afriLogo",
          },
        ]}
      />
    </Stack.Navigator>
  );
};

export { SplashStack };
