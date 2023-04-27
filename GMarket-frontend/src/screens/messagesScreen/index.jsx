import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './style'
import UserCoversationCard from '../../components/userConversationCard'
import { useSelector } from 'react-redux'
const test = [1,2,3]
const MessagesScreen = () => {
  const app = useSelector(state => state.app)
  console.log(app.messages[0].participants);
  return (
    <View style = {styles.container}>
        <UserCoversationCard bot/>
        {app.messages.map((t,i) => <UserCoversationCard key={i} />) }
    </View>
  )
}

export default MessagesScreen