import { View } from 'react-native'
import React from 'react'
import { createStyles } from './styles';
import { useThemeStore } from '@stores/theme-store';
import Text from '@components/atoms/Text';
import Image from '@components/atoms/Image';
import { ProductItemProps } from './types';
import Card from '@components/molecules/Card';

const ProductItem = ({
  title,
  image,
  price,
}: ProductItemProps) => {

  const theme = useThemeStore(state => state.theme);

  const styles = createStyles(theme.colors);

  return (
    <Card>
      <View style={styles.container}>
        <Image
          height={64}
          width={64}
          source={{ uri: image }}
        />
        <View style={styles.infoProductContainer}>
          <Text ellipsizeMode='tail' numberOfLine={1} >{ title }</Text>
          <Text weight='semibold'>${price}</Text>
        </View>
      </View>
    </Card>
  )
}

export default ProductItem
