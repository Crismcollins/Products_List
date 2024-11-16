import { ImageResizeMode, ImageSourcePropType, ImageStyle, ViewStyle } from "react-native"

export type ImageProps = {
    source: ImageSourcePropType;
    resizeMode?: ImageResizeMode;
    height?: number;
    width?: number;
    style?: ImageStyle;
    imageContainerStyle?: ViewStyle;
}