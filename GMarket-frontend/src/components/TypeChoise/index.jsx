import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './style'

const TypeChoise = () => {
  return (
    <View style = {[styles.container,porps.isActive && styles.activeContainer]}>
    <Text style = {[styles.text,porps.isActive && styles.activeText]}> Farmer</Text>
    </View>
  )
}

export default TypeChoise