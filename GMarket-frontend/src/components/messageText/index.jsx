import { View, Text } from 'react-native'
import React from 'react'
import { style } from './style'

const MessageText = (props) => {
  return (
    <View style={[style.container,props.user && style.userContainer]}>
      <Text style ={[style.text,props.user && style.user]}>{props.message}</Text>
    </View>
  )
}

export default MessageText