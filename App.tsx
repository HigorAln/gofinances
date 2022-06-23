import React from 'react';
import "intl"
import "intl/locale-data/jsonp/pt-BR"

import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';
import * as SplashScreen from 'expo-splash-screen';

import { NavigationContainer } from '@react-navigation/native';

import {
	useFonts,
	Poppins_400Regular,
	Poppins_500Medium,
	Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import { Register } from './src/screens/Register';
import { AppRouters } from './src/routes/app.routes';

export default function App() {
	SplashScreen.preventAutoHideAsync();

	const [fontsLoaded] = useFonts({
		Poppins_400Regular,
		Poppins_500Medium,
		Poppins_700Bold,
	});

	if (!fontsLoaded) {
		return null;
	}

	SplashScreen.hideAsync();

	return (
		<ThemeProvider theme={theme}>
			<NavigationContainer>
				<AppRouters />
			</NavigationContainer>
		</ThemeProvider>
	);
}
