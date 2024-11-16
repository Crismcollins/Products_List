import React from 'react';
import { View, ViewStyle } from 'react-native';
import { DividerProps } from './types';
import { createStyles } from './styles';
import { useThemeStore } from '@stores/theme-store';

const Divider = ({
  color,
  width,
  style,
  containerStyle,
  containerHeight = 8,
}: DividerProps) => {

  const colors = useThemeStore(state => state.colors);
  const styles = createStyles();

  const customContainerStyle: ViewStyle = {
    height: containerHeight,
    ...containerStyle,
  }

  const customDividerStyle: ViewStyle = {
    backgroundColor: color ?? colors.gray[300],
    width,
    ...style,
  }

  return (
    <View style={[customContainerStyle, styles.container]}>
      <View style={[customDividerStyle, styles.divider]} />
    </View>
  )
}

export default Divider;
