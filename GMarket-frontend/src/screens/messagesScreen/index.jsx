import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './style'
import UserCoversationCard from '../../components/userConversationCard'
const test = [1,2,3]
const MessagesScreen = () => {
  return (
    <View style = {styles.container}>
        <UserCoversationCard bot/>
        {test.map((t,i) => <UserCoversationCard key={i} />) }
    </View>
  )
}

export default MessagesScreen