import { View } from 'react-native'
import React from 'react'
import { createStyles } from './styles';
import Text from '@components/atoms/Text';

type Props = {
  message: string;
}

const RenderMessage = ({ message }: Props) => {

  const styles = createStyles();

  return (
    <View style={styles.messageContainer}>
      <Text style={styles.messageText} numberOfLine={2}>
        {message}
      </Text>
    </View>
  )
}

export default RenderMessage;
