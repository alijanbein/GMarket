import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './style'

const EmptyScreen = (props) => {
  return (
    <View style ={styles.container}>
      <Text>EmptyScreen</Text>
    </View>
  )
}

export default EmptyScreen