import { ColorsType } from "@styles/themes/types";
import { StyleSheet } from "react-native";

export const createStyles = (colors: ColorsType) => StyleSheet.create({
  container: {
    gap: 16,
    padding: 8,
    backgroundColor: 'white',
    borderRadius: 16,

    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.06,
  },
  title: { 
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '500'
  },
  content: {
    gap: 16,
  },
  footer: {
    flex: 1,
    justifyContent: 'center'
  }

})