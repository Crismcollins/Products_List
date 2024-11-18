import { ScrollView, View } from 'react-native'
import React from 'react'
import useProductDetails from './useProductDetails';
import Image from '@components/atoms/Image';
import Text from '@components/atoms/Text';
import LoadingFullScreen from '@components/molecules/LoadingFullScreen';
import RenderMessage from '@components/specific/RenderMessage';

const ProductDetailsScreen = () => {

  const {
    product,
    isError,
    loading,
    theme,
    styles
  } = useProductDetails();
  
  if (isError) return <RenderMessage message='Hubo un problema al ver este producto, por favor intenta nuevamente.' />

  if (loading) return <LoadingFullScreen />

  return (
    <ScrollView style={styles.scrollviewContainer} >
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: product?.image }}
            resizeMode='contain'
            height={256}
          />
        </View>
        <View style={ styles.titleContainer }>
          <Text size='medium_3' weight='regular'>{product?.title}</Text>
          <Text size='medium_1' weight='regular' color={theme.colors.gray}>{product?.category}</Text>
          <Text size='x-large_1' weight='semibold'>${product?.price}</Text>
        </View>
        <Text size='medium_2'>{product?.description}</Text>
      </View>
    </ScrollView>
  )
}

export default ProductDetailsScreen
