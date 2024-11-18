import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { HeaderStyleOptions, HeaderTitleOptions } from "@routes/types";
import { ColorsType } from "@styles/themes/types";

export const screensOptions = (loading: boolean, colors: ColorsType): NativeStackNavigationOptions => {
  const headersStyle = screensStyle(colors);

  return {
    headerShown: !loading,
    ...headersStyle,
    headerTitleAlign: 'center',
  }
}

const screensStyle = (colors: ColorsType) => {
  const headerStyle = styleHeader(colors);
  const headerTitleStyle = styleHeaderTitle(colors);

  return { headerStyle, headerTitleStyle }
}

const styleHeader = (colors: ColorsType): HeaderStyleOptions => {
  return {
    backgroundColor: colors.primary
  }
}

const styleHeaderTitle = (colors: ColorsType): HeaderTitleOptions => {
  return {
    color: colors.white,
  }
}