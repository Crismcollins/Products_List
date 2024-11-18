import { ColorsType } from "@styles/themes/types";
import { StyleSheet } from "react-native";

export const createStyles = (colors: ColorsType) => StyleSheet.create({
  scrollviewContainer: {
    backgroundColor: colors.white,
  },
  container: {
    flex:1,
    gap: 16,
    paddingHorizontal: 16
  },
  imageContainer: {
    flex: 1,
    padding: 24
  },
  titleContainer: {
    gap: 4
  }
});