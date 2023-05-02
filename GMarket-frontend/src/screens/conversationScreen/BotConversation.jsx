
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
  const [message, setMessage] = useState("");
  const [showSendButton, setShouSendButton] = useState(false);
  const [errr, isLoading, sendRequest] = useHttp();
  const auth = useSelector((state) => state.auth);
  const current = useSelector((state) => state.current);
  const [conversation, setConversation] = useState([]);
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
      {conversation.map((data, index) => {
        return (
          <MessageText
            key={index}
            // user={data.sender == current.currentPersonData._id ? false : true}
            user = {true}
            message={data.message}
          />
        );
      })}
    </ScrollView>
    <ConversationTextInput
      value={message}
      showButton={showSendButton}
    //   onTextChange={changeTextHandler}
    //   onPress={sendTextHandler}
    />
  </View>
  )
}

export default BotConversation