import { ViewStyle } from "react-native";

export interface Props {
  children?: React.ReactNode,
  disabled?: boolean,
  styles?: ViewStyle,
  onPress?: () => void,
}
