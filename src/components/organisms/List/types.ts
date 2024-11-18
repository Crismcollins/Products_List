import { ViewStyle } from "react-native";

export type ListProps<T> = {
  data: T[];
  renderItem: ({ item, index }: { item: T, index: number }) => JSX.Element;
  keyExtractor: (item: T) => string;
  contentContainerStyle?: ViewStyle;
}