import { ColorsType } from "@styles/themes/types";
import { StyleSheet } from "react-native";

export const createStyles = (colors: ColorsType) => StyleSheet.create({
  container: {    
    flexDirection: 'row',
    alignItems: 'center',
    gap: 24
  },
  infoProductContainer: {
    flex: 1,    
    flexDirection: 'column',
    gap: 16
  }
});