import 'react-native-gesture-handler';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React from "react";
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './src/routes/app.routes';
import { SingIn } from './src/screens/SingIn';
import { ThemeProvider } from "styled-components";
import { AuthProvider } from './src/Hooks/auth';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import theme from "./src/global/styles/theme";
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
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <StatusBar barStyle="light-content"/>

          <AuthProvider >
              <SingIn />
          </AuthProvider>
          
      </NavigationContainer>
    </ThemeProvider>
  );
}
