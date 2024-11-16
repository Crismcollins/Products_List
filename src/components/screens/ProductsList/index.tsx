import { Button, Text, View } from 'react-native'
import React from 'react'
import { RootStackParamList } from '@routes/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { useAuthStore } from '@stores/auth-store';

type Props = {}

const ProductsListScreen = (props: Props) => {

  const logout = useAuthStore(state => state.logout);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleNavigateToProductList = () => navigation.navigate('ProductDetails', { id: 1 });

  return (
    <View>
      <Text>ProductsListScreen</Text>
      <Button
        title='Go to details product screen'
        onPress={handleNavigateToProductList}
      />
      <Button
        title='Logout'
        onPress={logout}
      />
    </View>
  )
}

export default ProductsListScreen
