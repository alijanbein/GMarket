import { View, Text, TouchableHighlight, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { styles } from "./style";
import ConversationTextInput from "../conversationTextInput";
import Avatar from "../Avatar";

const ChatModal = (props) => {
  const [showButton, setShowButton] = useState(false);
  const [messageText, setMessageText] = useState("");
  const onTextChange = (text) => {
    setMessageText(text);
    if (text.length != 0) {
      setShowButton(true);
    }
  };
  const sendHandler = async () => {
    console.log(messageText);
    setMessageText("");
  };
  return (
    <View style={styles.overlay}>
      <TouchableOpacity
        style={styles.bakcdrop}
        onPress={props.onCancel}
      ></TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={{ width: 60, height: 60, marginLeft: 15 }}>
            <Avatar uri="https://picsum.photos/id/1004/500/500" />
          </View>
          <Text style ={styles.bot_name}>Green <Text style = {styles.second_name_color}>Bot</Text></Text>
        </View>
        {/* <ConversationTextInput onTextChange = {props.onTextChange} value = {props.value} onPress = {props.onPress} /> */}

        <ConversationTextInput
          onTextChange={onTextChange}
          showButton={showButton}
          value={messageText}
          onPress={sendHandler}
        />
      </View>
    </View>
  );
};

export default ChatModal;
