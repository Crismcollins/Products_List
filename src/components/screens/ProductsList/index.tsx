import { View } from 'react-native'
import React from 'react'
import { ProductsListProps } from './types';
import useProductsList from './useProductsList';
import LoadingFullScreen from '@components/molecules/LoadingFullScreen';
import List from '@components/organisms/List';
import ListItem from '@components/molecules/ListItem';
import ProductItem from '@components/specific/ProductItem';
import RenderMessage from '@components/specific/RenderMessage';

const ProductsListScreen: React.FC<ProductsListProps> = ({ navigation }) => {

  const {
    products,
    loading,
    isError,
    styles,
    handleNavigateToProductList,
  } = useProductsList({ navigation });
  
  if (isError) return <RenderMessage message='Ocurrió un error mientras intentamos obtener los productos, por favor intentalo nuevamente.' />

  if (loading) return <LoadingFullScreen />

  if (!products || products?.length === 0) return <RenderMessage message='Ya no nos quedan productos =(' />

  return (
    <View style={ styles.container }>
      <List
        data={products}
        keyExtractor={product => product.title}
        renderItem={({ item, index }) =>
          <ListItem key={'item-' + index} onPress={() => handleNavigateToProductList(item.id)}>
            <ProductItem
              key={'product-item-' + index}
              title={item.title}
              image={item.image}
              price={item.price}
            />
          </ListItem>
        }
      />
    </View>
  )
}

export default ProductsListScreen
