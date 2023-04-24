import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { styles } from './style'

const UserCoversationCard = (props) => {
  return (
    <TouchableOpacity style={[styles.container,props.bot && styles.botContainer]}>
    </TouchableOpacity>
  )
}

export default UserCoversationCard