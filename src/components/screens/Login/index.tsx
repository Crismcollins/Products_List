import { Button, Text, View } from 'react-native'
import React from 'react'
import { useAuthStore } from '@stores/auth-store';

const LoginScreen = () => {

  const login = useAuthStore(state => state.login);

  const handleLogin = () => {
    login();
  }

  return (
    <View>
      <Text>Login</Text>
      <Button 
        title='Go to products list screen'
        onPress={handleLogin} />
    </View>
  )
}

export default LoginScreen
