import { useThemeStore } from '@stores/theme-store';
import React from 'react'
import { Button as RNPButton } from 'react-native-paper';

type Props = {
  text: string;
  mode: "text" | "outlined" | "contained" | "elevated" | "contained-tonal" | undefined;
  textColor?: string;
  disabled?: boolean;
  loading?: boolean;
  onPress: () => void;
}

const Button = ({
  text,
  textColor,
  loading,
  mode = 'text',
  disabled,
  onPress
}: Props) => {

  const { theme, isDarkMode } = useThemeStore();
  
  const disabledStyle = {
    color: theme.colors.black,
    background: theme.colors.gray,
  }

  const enabledStyle = {
    color: textColor ?? theme.colors.white,
    background: theme.colors.primary,
  }

  const buttonStyle = disabled ? disabledStyle : enabledStyle;

  return (
    <RNPButton
      {...{ mode, loading }}
      disabled= { disabled }
      textColor={ buttonStyle.color }
      contentStyle= {{ backgroundColor: buttonStyle.background }}
      dark={ isDarkMode }
      onPress={ onPress }
    >
      { loading ? 'Cargando' : text }
    </RNPButton>
  )
}

export default Button;
