import { View, Text, TouchableHighlight, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./style";
import ConversationTextInput from "../conversationTextInput";
import Avatar from "../Avatar";
import MessageText from "../messageText";
import UseHttp from "../../hooks/http-hook";

const ChatModal = (props) => {
  const [showButton, setShowButton] = useState(false);
  const [messageText, setMessageText] = useState("");
  const [error,isLoading,sendRequest] = UseHttp() 
  const [messages,setMessages] = useState([])
  const [, forceUpdate] = useState();

  const onTextChange = (text) => {
    setMessageText(text);
    if (text.length != 0) {
      setShowButton(true);
    }
  };


  useEffect(() => {
    const fetchData = async() => {
        try {
        const formData = new FormData()
        formData.append("message","hi");
        formData.append("sessionId",'alinjsama123')
        const response = await sendRequest("bot/post_message","POST",formData,{});
        if(response.status == "sucess"){
            setMessages((before) =>
                [...before,{messageText:response.response,user:"bot"} ]
            )
         
            console.log("message:" , messages);
        }
        } catch (error) {
            console.log(error.message);
        }

    }
    fetchData()
  },[])

const sendHandler =  async () => {
    setMessageText("")
    setMessages(before => [...before,{messageText,user:"user"}])
    const formData = new FormData()
        formData.append("message",messageText);
        formData.append("sessionId",'alinjsama123')
        const response = await sendRequest("bot/post_message","POST",formData,{});
        if(response.status == "sucess"){
            setMessages((before) =>
            [...before,{messageText:response.response,user:"bot"} ]
        )
        }
}
console.log(messages);
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
        <ScrollView style = {{paddingHorizontal:20}} contentContainerStyle={{paddingBottom:120}}>
      {messages.length != 0 &&   messages.map((data,index) => 
        <MessageText
              key = {index}
              user={data.user == "bot" ? false: true}
            //   message={data.message}

            message = {data.messageText}
            />
      )}
        </ScrollView>
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
