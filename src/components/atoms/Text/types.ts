import { ReactNode } from "react"
import { TextStyle } from "react-native"

export type TextProps = {
    children?: ReactNode;
    size?: TextType;
    weight?: FontWeightTypes;
    color?: string;
    numberOfLine?: number;
    style?: TextStyle;
}

export type FontWeightTypes = 'regular' | 'medium' | 'semibold' | 'bold';

export type TextType = 
    'small_1' | 
    'small_2' | 
    'small_3' |
    'medium_1' | 
    'medium_2' | 
    'medium_3' | 
    'large_1' | 
    'large_2' | 
    'large_3' |
    'x-large_1' |
    'x-large_2' | 
    'x-large_3'