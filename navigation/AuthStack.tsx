import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onbooarding from "../screens/Onboarding";
import Login from "../screens/Auth/Login";
import Signup from "../screens/Auth/Signup";
import { AuthStackParamList } from "../types";

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Onboarding"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Onboarding" component={Onbooarding} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
};

export default AuthStack;
