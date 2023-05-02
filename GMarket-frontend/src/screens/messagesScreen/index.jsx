import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './style'
import UserCoversationCard from '../../components/userConversationCard'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentConversation, setCurrentPersonData } from '../../redux/slices/currentSlice'
import { useNavigation } from '@react-navigation/native'
const test = [1,2,3];
const MessagesScreen = () => {
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)
  const app = useSelector(state => state.app)
  const navigation = useNavigation()

  const enterHandler = (data) => {
      dispatch(setCurrentConversation(data.conversation))
      dispatch(setCurrentPersonData(data.participants.filter(data => data.phone_number != auth.userData.phone_number)[0]))
      navigation.navigate("Conversation Screen")

  }
  const enterBotHandler = () => {
    navigation.navigate("Bot")


  }
console.log(app);

  return (
    <View style = {styles.container}>
        <UserCoversationCard onPress={enterBotHandler} bot profile_picture = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF23YFKkFn2nNUDaG7LHDCBIrBoKLIllKRE8_uWrD0&s" first_name ={'Green Bot'}/>
        { app.messages.length != 0 && app.messages.map((data,i) => <UserCoversationCard
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