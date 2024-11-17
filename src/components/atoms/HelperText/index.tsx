import { StyleProp, TextStyle, View } from 'react-native'

import React from 'react'
import { HelperText as RNPHelperText } from 'react-native-paper';
import { useThemeStore } from '@stores/theme-store';

type Props = {
  type: 'info' | 'error';
  text?: string;
  visible?: boolean;
  size?: number;
  style?: StyleProp<TextStyle>;
}

const HelperText = ({
  text,
  size,
  visible,
  type,
  style
}: Props) => {

  const { theme } = useThemeStore();

  const styles: StyleProp<TextStyle> = {
    fontSize: size ?? 14,
    color: type === 'error' ? theme.colors.error : theme.colors.primary,
    ...(style as object)
  }

  return (
    <RNPHelperText {...{ visible }} type={type} style={styles} >
      {text}
    </RNPHelperText>
  )
}

export default HelperText;
