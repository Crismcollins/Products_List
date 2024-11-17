import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput as RNPTextInput } from 'react-native-paper';

type Props = {
  label: string;
  textContentType: 'username' | 'password';
  onChangeText: (text:string) => void;
}

const TextInput = ({
  label,
  textContentType = 'username',
  onChangeText,
}: Props) => {

  const [text, setText] = useState<string>("");

  const handleChangeText = (inputText: string) => {
    setText(inputText);
    onChangeText(inputText);
  }

  return (
    <RNPTextInput
      label={ label }
      value={ text }
      mode='outlined'
      secureTextEntry={ textContentType === 'password'}
      textContentType={ textContentType }
      onChangeText={ handleChangeText }
    />
  )
}

export default TextInput

const styles = StyleSheet.create({})