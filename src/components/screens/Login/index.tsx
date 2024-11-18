import { View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useAuthStore } from '@stores/auth-store';
import { authLogin } from '@services/fetchServices';
import TextInput from '@components/molecules/TextInput';
import HelperText from '@components/atoms/HelperText';
import Card from '@components/molecules/Card';
import { createStyles } from './style';
import { useThemeStore } from '@stores/theme-store';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { LoginRequest, LoginResponse } from './types';

const LoginScreen = () => {
  const [formData, setFormData] = useState<LoginRequest>({} as LoginRequest);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);

  const login = useAuthStore(state => state.login);
  const setToken = useAuthStore(state => state.setToken);

  const { setItem } = useAsyncStorage('token');
  
  const { mutate: handleAuthLogin, isPending } = authLogin();
  
  const { theme } = useThemeStore();
  
  const styles = createStyles(theme.colors);
  
  const handleChangeText = (text: string, type: 'username' | 'password') => {
    if (type === 'username')
      setFormData({ ...formData, username: text.toLowerCase() })
    else
      setFormData({ ...formData, password: text.toLowerCase() })
  }

  const handleLogin = () => {

    handleAuthLogin(formData, {
      onSuccess: async (data) => {
        const response: LoginResponse = data.data;
        const token = response.token;
        setToken(token);
        await setItem(token);
        login();
      },
      onError: (error) => {
        const message = error.response?.data as string;
        setErrorMessage(message);
      }
    })
  }

  useEffect(() => {
    if (!formData.username || !formData.password)
      setButtonDisabled(true);
    else
      setButtonDisabled(false);
  }, [formData.username, formData.password])

  return (
    <View style={styles.container}>
      <Card
        title='Ingresar'
        submitButtonText='Login'
        submitDisabled={buttonDisabled || isPending}
        submitIsLoading= {isPending}
        onSubmit={handleLogin}
      >
        <TextInput
          label='Usuario'
          textContentType='username'
          onChangeText={(text: string) => handleChangeText(text, 'username')}
        />
        <TextInput
          label='Contraseña'
          textContentType='password'
          onChangeText={(text: string) => handleChangeText(text, 'password')}
        />

        <HelperText
          visible={!!errorMessage}
          text={errorMessage}
          type='error'
          size={14}
          style={{ alignSelf: 'center' }}
        />
      </Card>
    </View>
  )
}

export default LoginScreen
