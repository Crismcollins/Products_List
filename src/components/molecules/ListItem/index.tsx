import { View } from 'react-native'
import React from 'react'
import Text from '@components/atoms/Text'
import Pressable from '@components/atoms/TouchableOpacity'

type Props = {
  onPress: () => void;
}

const ListItem = ({
  onPress
}: Props) => {
  return (
    <Pressable onPress={onPress} >
      <View>
        <Text>
          TEST
        </Text>
      </View>
    </Pressable>
  )
}

export default ListItem
