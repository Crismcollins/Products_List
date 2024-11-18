import React from 'react'
import { View } from 'react-native'
import TextInput from '@components/molecules/TextInput';
import HelperText from '@components/atoms/HelperText';
import Card from '@components/molecules/Card';
import useLogin from './useLogin';

const LoginScreen = () => {
  
  const {
     styles,
     buttonDisabled,
     errorMessage,
     isPending,
     handleChangeText,
     handleLogin
  } = useLogin();

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

export default LoginScreen;
