import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Auth/Login";
import Signup from "../screens/Auth/Signup";
import { AuthStackParamList } from "../types";
import SplashStack from "../components/Splash";
import ForgotPassword from "../screens/Auth/ForgotPassword";
import NewPassword from "../screens/Auth/NewPassword";

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = () => (
  <Stack.Navigator initialRouteName="Onboarding" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Onboarding" component={SplashStack} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Signup" component={Signup} />
    <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    <Stack.Screen name="NewPassword" component={NewPassword} />
  </Stack.Navigator>
);

export default AuthStack;
