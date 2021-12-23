import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState } from "react";
import { View } from "../Themed";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import Onbooarding from "../../screens/Onboarding";
import SplashView from "./SplashView";

const SplashStack = createSharedElementStackNavigator();

const AnimatedAppLoader = ({ children }: { children: React.ReactNode }) => {
  return (
    <NavigationContainer>
      <SplashStack.Navigator
        initialRouteName="SplashView"
        screenOptions={{ headerShown: false }}
      >
        <SplashStack.Screen name="SplashView" component={SplashView} />
        <SplashStack.Screen
          name="SplashOnboard"
          component={Onbooarding}
          sharedElements={() => [
            {
              id: "afriLogo",
            },
          ]}
        />
      </SplashStack.Navigator>
    </NavigationContainer>
  );
};

export { AnimatedAppLoader };
