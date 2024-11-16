import React from 'react';
import { Image as RNImage, View } from 'react-native';
import { ImageProps } from './types';

const Image = ({
  source,
  height,
  width,
  resizeMode,
  style,
  imageContainerStyle,
}: ImageProps) => {
  
  return (
    <View style={imageContainerStyle}>
      <RNImage 
        source={source}
        resizeMode={resizeMode}
        style={[style, { height, width }]}
        />
    </View>
  );
};

export default Image;
