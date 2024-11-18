import { ColorsType } from "@styles/themes/types";
import { StyleSheet } from "react-native";

export const createStyles = () => StyleSheet.create({
  container: {
    padding: 16
  },
  messageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageText: {
    textAlign: 'center'
  }
});
