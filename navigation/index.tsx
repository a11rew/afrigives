import { FontAwesome } from "@expo/vector-icons";
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Session, User } from "@supabase/supabase-js";
import * as React from "react";
import { ColorSchemeName, Pressable } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import { RootState } from "../store";
import { RootStackParamList } from "../types";
import AuthStack from "./AuthStack";
import BottomTabNavigator from "./BottomTab";
import LinkingConfiguration from "./LinkingConfiguration";

export default function Navigation({
  colorScheme,
  initialAuth,
}: {
  colorScheme: ColorSchemeName;
  initialAuth: { session: Session | null; user: User | null };
}) {
  const { session, user } = useSelector((state: RootState) => state.auth);

  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      {(initialAuth.session || session) && (initialAuth.user || user) ? (
        <RootNavigator />
      ) : (
        <AuthStack />
      )}
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
    <Stack.Screen name="NotFound" component={NotFoundScreen} />
    <Stack.Group screenOptions={{ presentation: "modal" }}>
      <Stack.Screen name="Modal" component={ModalScreen} />
    </Stack.Group>
  </Stack.Navigator>
);
