import { StyleProp, View, ViewStyle } from 'react-native'
import React, { ReactNode } from 'react'
import Pressable from '@components/atoms/TouchableOpacity'

type Props = {
  children?: ReactNode;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

const ListItem = ({
  children,
  style,
  onPress
}: Props) => {
  return (
    <Pressable onPress={ onPress }>
      <View style={style}>{ children }</View>
    </Pressable>
  )
}

export default ListItem
