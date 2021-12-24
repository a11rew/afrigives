import React from "react";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import Onbooarding from "../../screens/Onboarding";
import SplashView from "./SplashView";

const Stack = createSharedElementStackNavigator();

const SplashStack = ({ children }: { children: React.ReactNode }) => (
  <Stack.Navigator initialRouteName="SplashView" screenOptions={{ headerShown: false }}>
    <Stack.Screen
      name="SplashView"
      component={SplashView}
      // sharedElements={() => [
      //   {
      //     id: "afriLogo",
      //   },
      // ]}
    />
    <Stack.Screen name="SplashOnboard" component={Onbooarding} />
  </Stack.Navigator>
);

export default SplashStack;
