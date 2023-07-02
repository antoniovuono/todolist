import React from "react";
import { Home } from "./src/screens/Home";
import { ThemeProvider } from "styled-components";
import theme from "./src/theme";
import {
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";
import { StatusBar } from "react-native";
import { InitialLoader } from "./src/components/InitialLoader";

const App = () => {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="light-content"
      />
      {fontsLoaded ? <InitialLoader /> : <Home />}
    </ThemeProvider>
  );
};

export default App;
