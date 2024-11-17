import { Text as RNPText } from 'react-native-paper';
import { TextProps } from './types';
import { StyleProp, TextStyle } from 'react-native';
import { setSizeByTextType, setWeightText } from './utils';
import { useThemeStore } from '@stores/theme-store';

const Text = ({
	children,
	size = 'medium_1',
	weight = 'regular',
	numberOfLine = 1,
	color,
	style
}:TextProps) => {

	const { theme } = useThemeStore();

	const textStyles: StyleProp<TextStyle> = {
		fontSize: setSizeByTextType(size),
		fontWeight: setWeightText(weight),
		color: color ?? theme.colors.black,
	}

	return (
			<RNPText
				numberOfLines={numberOfLine}
				style={ [textStyles, style] }
			>
				{ children }
			</RNPText>
    )
}

export default Text;
