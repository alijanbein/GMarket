import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './style'
import UserCoversationCard from '../../components/userConversationCard'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentConversation, setCurrentPersonData } from '../../redux/slices/currentSlice'
const test = [1,2,3];
const MessagesScreen = () => {
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)
  const app = useSelector(state => state.app)
  console.log("user:",app.messages[0].conversation);
  const enterHandler = (data) => {
      dispatch(setCurrentConversation(data.conversation))
      dispatch(setCurrentPersonData(data.phone_number != auth.userData.phone_number)[0])
  }

  return (
    <View style = {styles.container}>
        <UserCoversationCard bot/>
        {app.messages.map((data,i) => <UserCoversationCard
        onPress = {() => {
          enterHandler(data)
        }}
         profile_picture = {data.participants.filter(data => data.phone_number != auth.userData.phone_number)[0].profile_picture} 
         first_name = {data.participants.filter(data => data.phone_number != auth.userData.phone_number)[0].first_name}
         last_name = {data.participants.filter(data => data.phone_number != auth.userData.phone_number)[0].last_name}
         last_message = {data.conversation.slice(-1)[0].message}
        key={i} />) }
    </View>
  )
}

export default MessagesScreen