import LoadingFullScreen from '@components/molecules/LoadingFullScreen';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { RootStack } from '@routes/RootStack';
import { useAuthStore } from '@stores/auth-store';
import { useAppStore } from '@stores/app-store';
import { useThemeStore } from '@stores/theme-store';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { PaperProvider } from 'react-native-paper';

function App(): React.JSX.Element {

  const queryClient = new QueryClient();

  const setTheme = useThemeStore(state => state.setTheme);
  const theme = useThemeStore(state => state.theme);

  const login = useAuthStore(state => state.login);
  const setToken = useAuthStore(state => state.setToken);

  const loading = useAppStore(state => state.loading);
  const setLoading = useAppStore(state => state.setLoading);

  const deviceTheme = useColorScheme();

  const { getItem } = useAsyncStorage('token');

  if (deviceTheme === 'dark')
    setTheme();

  useEffect(() => {
    const handleUserLogin = async () => {
      const token = await getItem();
      if (token) {
        setToken(token);
        login();
      }
      setLoading(false);
    }

    handleUserLogin();

  }, [])

  if (loading) return <LoadingFullScreen />

  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider {...theme} >
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </PaperProvider>
    </QueryClientProvider>
  );
}

export default App;
