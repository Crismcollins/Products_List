import { StyleProp, TextStyle } from "react-native";

export type RootStackParamList = {
  Login: undefined;
  ProductsList: undefined;
  ProductDetails: { id: number };
};

export type HeaderTitleOptions = StyleProp<Pick<TextStyle, "fontFamily" | "fontSize" | "fontWeight"> & {
  color?: string | undefined;
}>

export type HeaderStyleOptions = StyleProp<{
  backgroundColor?: string | undefined;
}>