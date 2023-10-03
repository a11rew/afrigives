import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";


// This is the main layout of the app
// It wraps your pages with the providers they need
const RootLayout = () => {
  return (
    <>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#f472b6",
          },
        }}
      />
      <StatusBar />
    </>
  );
};

export default RootLayout;
