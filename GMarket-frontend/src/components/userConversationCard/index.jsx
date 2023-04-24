import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './style'

const UserCoversationCard = (props) => {
  return (
    <View style={[styles.container,props.bot && styles.botContainer]}>
    
    </View>
  )
}

export default UserCoversationCard