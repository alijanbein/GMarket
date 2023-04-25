import { View, Text, TextInput } from 'react-native'
import React from 'react'
import style from './style'

const ConversationTextInput = () => {
  return (
    <TextInput style= {style.container} placeholder='enter your text'/>
  )
}

export default ConversationTextInput