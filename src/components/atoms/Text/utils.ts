import { FontWeightTypes, TextType } from "./types";

export const setWeightText = (weight: FontWeightTypes) => {
    if (weight === 'regular')
        return 400;
    else if (weight === 'medium')
        return 500;
    else if (weight === 'semibold')
        return 600;
    else if (weight === 'bold')
        return 700;
    else
        return 400;
}

export const setSizeByTextType = (size: TextType): number => {
    if (size === 'small_1')
        return 8;
    else if (size === 'small_2')
        return 10;
    else if (size === 'small_3')
        return 12;
    else if (size === 'medium_1')
        return 14;
    else if (size === "medium_2")
        return 16;
    else if (size === "medium_3")
        return 18;
    else if (size === "large_1")
        return 20;
    else if (size === "large_2")
        return 22;
    else if (size === "large_3")
        return 24;
    else if (size === "x-large_1")
        return 26;
    else if (size === "x-large_2")
        return 28;
    else if (size === 'x-large_3')
        return 30;
    else
        return 8;
}

export const isTextType = (size: TextType) => typeof size === 'string';
