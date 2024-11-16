import { MD3DarkTheme, MD3LightTheme } from "react-native-paper";

export const lightTheme = {
	...MD3LightTheme,
	myOwnProperty: true,
	colors: {
		...MD3LightTheme.colors,
		primary: '#3579D3',
		secondary: '#7FE4E1',
		gray: '#98A2B3',
		error: '#FC8B7D',
		warning: '#FDB022',
		success: '#58D97A',
		background: '#F4F7FA',
		white: '#FFFFFF',
		black: '#000000',
	},
}

export const darkTheme = {
  ...MD3DarkTheme,
  myOwnProperty: true,
  colors: {
    ...MD3DarkTheme.colors,
    primary: '#3579D3',
    secondary: '#63D1CF',
    gray: '#6C7783',
    error: '#F28B7D',
    warning: '#EBA722',
    success: '#48C96A', 
    background: '#1B1F23',
    white: '#1B1F23',
    black: '#FFFFFF',
  },
};

export type AppTheme = typeof lightTheme;
