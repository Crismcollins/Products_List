import React from 'react';
import { Pressable as RNPressable } from 'react-native';
import { Props } from './types';

const Pressable = ({ onPress, styles, children, disabled }: Props) => {
  return (
    <RNPressable onPress={onPress} style={styles} disabled={disabled}>
      {children}
    </RNPressable>
  );
}

export default Pressable;
