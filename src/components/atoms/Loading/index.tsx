import React from 'react'
import { StyleProp, ViewStyle } from 'react-native';
import { ActivityIndicator } from 'react-native-paper'

type Props = {
  color?: string;
  size?: 'small' | 'large' | number;
  style?: StyleProp<ViewStyle>;
}

const Loading = ({
  color,
  size,
  style
}: Props) => {
  return (
    <ActivityIndicator {...{color, size, style}} animating />
  )
}

export default Loading
