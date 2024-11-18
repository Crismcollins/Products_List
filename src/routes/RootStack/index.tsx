import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import ProductsListScreen from '@components/screens/ProductsList';
import ProductDetailsScreen from '@components/screens/ProductDetails';
import LoginScreen from '@components/screens/Login';
import { useAuthStore } from '@stores/auth-store';
import { useAppStore } from '@stores/app-store';
import { useThemeStore } from '@stores/theme-store';
import { screensOptions } from '@routes/RootStack/config';


const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootStack = () => {
  const theme = useThemeStore(state => state.theme);
  const loading = useAppStore(state => state.loading);
  const isAuthenticated = useAuthStore(state => state.isAuthenticated);

  const screenOptions = screensOptions(loading, theme.colors);

  return (
    <Stack.Navigator
      initialRouteName={`${isAuthenticated ? 'ProductsList' : 'Login'}`}
      screenOptions={screenOptions}
    >
      {isAuthenticated ? (
        <Stack.Group>
          <Stack.Screen 
            name='ProductsList'
            component={ProductsListScreen}
            options={{ title: 'Productos' }}
          />
          <Stack.Screen
            name='ProductDetails'
            component={ProductDetailsScreen}
            options={{ headerBackTitle: 'Volver', headerTintColor: 'white' } }
          />
        </Stack.Group>
      ) : (
        <Stack.Group>
          <Stack.Screen name='Login' component={LoginScreen} options={{ title: 'Iniciar sesión', animation: 'slide_from_left' }} />
        </Stack.Group>
      )}
    </Stack.Navigator>
  )
}
