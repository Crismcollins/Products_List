import React, { useEffect } from 'react'
import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import ProductsListScreen from '@components/screens/ProductsList';
import ProductDetailsScreen from '@components/screens/ProductDetails';
import LoginScreen from '@components/screens/Login';
import { useNavigation } from '@react-navigation/native';
import { useAuthStore } from '@stores/auth-store';
import { useDataStore } from '@stores/data-store';
import { useThemeStore } from '@stores/theme-store';
import { screensOptions } from './config';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootStack = () => {
  const theme = useThemeStore( state => state.theme);
  const loading = useDataStore(state => state.loading);
  const isAuthenticated = useAuthStore(state => state.isAuthenticated);

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const screenOptions = screensOptions(loading, theme.colors);

  useEffect(() => {
    if (isAuthenticated)
      navigation.navigate('ProductsList');
    else
      navigation.navigate('Login');
  }, [isAuthenticated])

  return (
      <Stack.Navigator initialRouteName='Login' screenOptions={ screenOptions }>
        {isAuthenticated ? (
          <Stack.Group>
            <Stack.Screen name='ProductsList' component={ProductsListScreen} />
            <Stack.Screen name='ProductDetails' component={ProductDetailsScreen} />
          </Stack.Group>
        ) : (
          <Stack.Group>
            <Stack.Screen name='Login' component={LoginScreen} options={{ title: 'Iniciar sesión' }} />
          </Stack.Group>
        )}
      </Stack.Navigator>
  )
}
