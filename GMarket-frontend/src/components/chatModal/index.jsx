import { View, Text, TouchableHighlight, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { styles } from "./style";
import ConversationTextInput from "../conversationTextInput";

const ChatModal = (props) => {
    const [showButton,setShowButton] = useState(false)
    const [messageText,setMessageText] = useState(false)
    const onTextChange = (text) =>{
        setMessageText(text)
        if(text.length != 0){
            setShowButton(true)
        }
    }
    const sendHandler =  async() => {
        console.log(messageText);
        setMessageText("")
    }
  return (
      <View style={styles.overlay}>
        <TouchableOpacity
          style={styles.bakcdrop}
          onPress={props.onCancel}
        ></TouchableOpacity>
        <View style={styles.container}>
          {/* <ConversationTextInput onTextChange = {props.onTextChange} value = {props.value} onPress = {props.onPress} /> */}
          <ConversationTextInput onTextChange = {onTextChange} showButton = {showButton} value ={messageText} onPress = {sendHandler} />
        </View>
      </View>
  );
};

export default ChatModal;
