import { ColorsType } from "@styles/themes/types";
import { StyleSheet } from "react-native";

export const createStyles = (colors: ColorsType) => StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 32
  }
})