import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./style";
import Avatar from "../../components/Avatar";
import Icon from "react-native-vector-icons/Ionicons";
import ConversationTextInput from "../../components/conversationTextInput";
import MessageText from "../../components/messageText";

const ConversationScreen = () => {
  const [message,setMessage] = useState("");
  const [showSendButton,setShouSendButton] = useState(false);
  const changeTextHandler = (text) => {
    setMessage(text);
    
  }

  const sendTextHandler = () =>{
    console.log(message);
  }

  useEffect(()=>{
    if(message.length == 0){
      setShouSendButton(false)
    }
    else{
      setShouSendButton(true)
    }
  },[message])
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon style={styles.icon} name="arrow-back" size={24} color="#000" />

        <View style={{ width: 60, height: 60, marginLeft: 15 }}>
          <Avatar uri="https://picsum.photos/id/1004/500/500" />
        </View>

        <Text style={styles.name}>Ali Janbein</Text>
      </View>
      {/* <ScrollView style ={styles.ScrollView}> */}
        <MessageText/>
      {/* </ScrollView> */}
      <ConversationTextInput showButton = {showSendButton} onTextChange = {changeTextHandler} onPress ={sendTextHandler} />
    </View>
  );
};

export default ConversationScreen;
