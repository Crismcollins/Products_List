import { Product, ProductsListProps } from './types';
import { getListProducts } from '@services/fetchServices';
import { useEffect, useState } from 'react';
import { createStyles } from './style';
import { useThemeStore } from '@stores/theme-store';

const useProductsList = ({
  navigation
 }: ProductsListProps) => {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const { data, isLoading, error } = getListProducts();

  const theme = useThemeStore(state => state.theme);
  const styles = createStyles(theme.colors);

  const handleNavigateToProductList = (id: number) => navigation.navigate('ProductDetails', { id });

  useEffect(() => {
    if (products && !isLoading)
      setLoading(false)
  }, [products])

  useEffect(() => {
    if (data?.data && ( data.data !== products ) )
      setProducts(data.data);
  }, [data])

  return {
    products,
    loading,
    isError: !!error,
    styles,
    handleNavigateToProductList,
  }
}

export default useProductsList;
