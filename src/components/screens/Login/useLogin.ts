import { useEffect, useState } from "react";
import { LoginRequest, LoginResponse } from "./types";
import { useAuthStore } from "@stores/auth-store";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { authLogin } from "@services/fetchServices";
import { useThemeStore } from "@stores/theme-store";
import { createStyles } from "./style";

const useLogin = () => {
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
      setFormData({ ...formData, username: text })
    else
      setFormData({ ...formData, password: text })
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

  return {
    styles,
    errorMessage,
    buttonDisabled,
    isPending,
    handleLogin,
    handleChangeText,
  }
}

export default useLogin