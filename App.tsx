import 'react-native-gesture-handler';
import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './src/routes/app.routes';
import { ThemeProvider } from "styled-components";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import themes from "./src/global/styles/themes";
import AppLoading from 'expo-app-loading';

export default function App() {
  const [fontLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  })
  if(!fontLoaded)
  return <AppLoading />

  return (
    <ThemeProvider theme={themes}>
      <NavigationContainer>
       <AppRoutes />
      </NavigationContainer>
    </ThemeProvider>
  );
}
