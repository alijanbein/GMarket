
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./style";
import Avatar from "../../components/Avatar";
import Icon from "react-native-vector-icons/Ionicons";
import ConversationTextInput from "../../components/conversationTextInput";
import MessageText from "../../components/messageText";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import useHttp from "../../hooks/http-hook";
const BotConversation = () => {
const navigation = useNavigation();
  const [messageText, setMessageText] = useState("");
  const [showSendButton, setShouSendButton] = useState(false);
  const [messages,setMessages] = useState([])
  const [errr, isLoading, sendRequest] = useHttp();
  const auth = useSelector((state) => state.auth);
  const current = useSelector((state) => state.current);
  const changeTextHandler = (text) => {
    setMessageText(text);
    if (text.length != 0) {
      setShouSendButton(true);
    }
  };

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

  return (
    <View style={styles.container}>
    <View style={styles.header}>
      <Icon
        onPress={() => {
          navigation.goBack();
        }}
        style={styles.icon}
        name="arrow-back"
        size={24}
        color="#000"
      />

      <TouchableOpacity style={styles.user} onPress={() =>{}}>
        <View style={{ width: 60, height: 60, marginLeft: 15 }}>
          <Avatar uri='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF23YFKkFn2nNUDaG7LHDCBIrBoKLIllKRE8_uWrD0&s' />
        </View>

        <Text style={styles.name}>
         Green Bot
        </Text>
      </TouchableOpacity>
    </View>
    <ScrollView
      style={styles.ScrollView}
      contentContainerStyle={styles.contentContainerStyle}
    >
      {messages.length != 0 && messages.map((data, index) => {
        return (
          <MessageText
            key={index}
            // user={data.sender == current.currentPersonData._id ? false : true}
            user={data.user == "bot" ? false: true}
            message={data.messageText}
          />
        );
      })}
    </ScrollView>
    <ConversationTextInput
      value={messageText}
      showButton={showSendButton}
      onTextChange={changeTextHandler}
      onPress={sendHandler}
    />
  </View>
  )
}

export default BotConversation