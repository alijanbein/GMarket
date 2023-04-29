import { View, Text, Image } from 'react-native'
import React from 'react'
import style from './style'
const Avatar = (props) => {
  return (
    <Image source={{uri:props.uri}} style = {style.container} />
    
  )
}

export default Avatar