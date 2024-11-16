import { Text as RNText, StyleProp, TextStyle } from "react-native";
import { TextProps } from "./types";
import { setSizeByTextType, setWeightText } from "./utils";

const Text = ({
    children,
    size = 'medium_1',
    weight = 'regular',
    color,
    numberOfLine,
    style,
}: TextProps) => {

    const stylesProps: StyleProp<TextStyle> = {
        fontSize: setSizeByTextType(size),
        color,
        fontWeight: setWeightText(weight)
    }

    return (
        <RNText
            numberOfLines={numberOfLine}
            style={[{ ...stylesProps, ...style }]}
        >
            {children}
        </RNText>
    )
}

export default Text;
