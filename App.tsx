import React from 'react';
import { Dashboard } from './src/screens/Dashboard';
import { ThemeProvider } from 'styled-components'
import theme from './src/global/styles/theme';
import * as SplashScreen from 'expo-splash-screen'

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';
import { Register } from './src/screens/Register';

export default function App() {
  SplashScreen.preventAutoHideAsync();

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if (!fontsLoaded) {
    return null
  }

  SplashScreen.hideAsync();

  return (
    <ThemeProvider theme={theme}>
      <Register />
    </ThemeProvider>
  );
}
