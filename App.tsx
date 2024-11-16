import { NavigationContainer } from '@react-navigation/native';
import { RootStack } from '@routes/RootStack';
import { useThemeStore } from '@stores/theme-store';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { useColorScheme } from 'react-native';
import { PaperProvider } from 'react-native-paper';

function App(): React.JSX.Element {
  const queryClient = new QueryClient();
  const setTheme = useThemeStore(state => state.setTheme);
  const theme = useThemeStore(state => state.theme);

  const deviceTheme = useColorScheme();

  if (deviceTheme === 'dark')
    setTheme();

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <PaperProvider {...theme} >
          <RootStack />
        </PaperProvider>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
