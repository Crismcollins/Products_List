import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Loading from '@components/atoms/Loading'
import { useThemeStore } from '@stores/theme-store'

type Props = {
  
}

const LoadingFullScreen = ({

}: Props) => {

  const { theme } = useThemeStore();
  return (
    <View style={ styles.container }>
      <Loading
        color={ theme.colors.primary }
        size={ 'large' }
      />
    </View>
  )
}

export default LoadingFullScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})