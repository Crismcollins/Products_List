import React from 'react';
import { TouchableOpacity as RNTouchableOpacity } from 'react-native';
import { Props } from './types';

const Pressable = ({ onPress, styles, children, disabled }: Props) => {
  return (
    <RNTouchableOpacity onPress={onPress} style={styles} disabled={disabled}>
      {children}
    </RNTouchableOpacity>
  );
}

export default Pressable;
