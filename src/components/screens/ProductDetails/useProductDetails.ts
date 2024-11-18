import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Product, ProductsListProps } from '../ProductsList/types'
import { createStyles } from './styles'
import { useThemeStore } from '@stores/theme-store'
import { RouteProp, useRoute } from '@react-navigation/native'
import { RootStackParamList } from '@routes/types'
import { getProductById } from '@services/fetchServices'


const useProductDetails = () => {

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const theme = useThemeStore(state => state.theme);

  const { params } = useRoute<RouteProp<RootStackParamList, 'ProductDetails'>>();
  const { id } = params;
  
  const { data, isLoading, isError } = getProductById(id);
  
  const styles = createStyles(theme.colors);

  useEffect(() => {
    if (product && !isLoading)
      setLoading(false);
  }, [product])

  useEffect(() => {
    if (data?.data && data.data !== product)
      setProduct(data.data);
  }, [data?.data])
  
  return {
    product,
    loading,
    styles,
    isError,
    theme,
  }
}

export default useProductDetails
