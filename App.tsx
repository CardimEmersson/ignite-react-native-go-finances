import React from "react";
import { ThemeProvider } from "styled-components";
import AppLoading from "expo-app-loading";
import { LogBox } from "react-native";
import { Dashboard } from "./src/screens/Dashboard";
import theme from "./src/global/styles/theme";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

export default function App() {
  LogBox.ignoreLogs(["Remote debugger"]);

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  );
}
