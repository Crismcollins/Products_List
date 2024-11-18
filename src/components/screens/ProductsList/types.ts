import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@routes/types";

export type ProductsListProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

export type Product = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: {
    count: number;
    rate: number;
  },
  title: string;
}