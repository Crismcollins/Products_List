import { FlatList } from 'react-native'
import React from 'react'
import { ListProps } from './types';

const List = <T,> ({
  data,
  renderItem,
  keyExtractor,
  contentContainerStyle,
}: ListProps<T>) => {
  return (
    <FlatList
      { ...{ data, renderItem, keyExtractor, contentContainerStyle } }
      contentContainerStyle={{ gap: 16 }}
    />
  )
}

export default List;
