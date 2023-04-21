import { View, Text, TouchableHighlight } from 'react-native'
import React from 'react'
import { styles } from './style'

const TypeChoise = (props) => {
  return (
    <TouchableHighlight onPress={()=>{
      props.onPress(props.text)
    }}  style = {[styles.container,props.isActive && styles.activeContainer]}>
    <Text style = {[styles.text,props.isActive && styles.activeText]}> {props.text}</Text>
    </TouchableHighlight>
  )
}

export default TypeChoise