import { View, Text, TouchableHighlight } from 'react-native'
import React from 'react'
import { styles } from './style'

const TypeChoise = (props) => {
  return (
    <TouchableHighlight onPress={props.onPress}  style = {[styles.container,props.isActive && styles.activeContainer]}>
    <Text style = {[styles.text,props.isActive && styles.activeText]}> Farmer</Text>
    </TouchableHighlight>
  )
}

export default TypeChoise