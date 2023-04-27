import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./style";
import Avatar from "../../components/Avatar";
import Icon from "react-native-vector-icons/Ionicons";
import ConversationTextInput from "../../components/conversationTextInput";
import MessageText from "../../components/messageText";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import useHttp from "../../hooks/http-hook";
const ConversationScreen = () => {
  const navigation = useNavigation();
  const [message, setMessage] = useState("");
  const [showSendButton, setShouSendButton] = useState(false);
  const [errr, isLoading, sendRequest] = useHttp();
  const auth = useSelector((state) => state.auth);
  const current = useSelector((state) => state.current);
  const [conversation, setConversation] = useState([]);
  // console.log(current.currentPersonData._id);
  const changeTextHandler = (text) => {
    setMessage(text);
  };

  const sendTextHandler = () => {
    console.log(message);
  };

  useEffect(() => {
    const fetchData = async () => {
      const formData = new FormData();
      formData.append("recipient", current.currentPersonData._id);
      const response = await sendRequest(
        "user/get_one_conversation",
        "POST",
        formData,
        {
          authorization: "Bearer " + auth.token,
        }
      );
      console.log(response);
      if (response.status == "sucess") {
        setConversation(response.conversation.conversation);
      }
    };
      setTimeout(() =>{
        fetchData()
      },10000)
  }, []);
  console.log(conversation);
  useEffect(() => {
    if (message.length == 0) {
      setShouSendButton(false);
    } else {
      setShouSendButton(true);
    }
  }, [message]);

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

        <View style={{ width: 60, height: 60, marginLeft: 15 }}>
          <Avatar uri={current.currentPersonData.profile_picture} />
        </View>

        <Text style={styles.name}>
          {current.currentPersonData.first_name}{" "}
          {current.currentPersonData.last_name}
        </Text>
      </View>
      <ScrollView
        style={styles.ScrollView}
        contentContainerStyle={styles.contentContainerStyle}
      >

        {conversation.map((data, index) => {
          return (
            <MessageText
              key = {index}
              user={data.sender == current.currentPersonData._id ? false : true}
              message={data.message}
            />
          );
        })}
      </ScrollView>
      <ConversationTextInput
        showButton={showSendButton}
        onTextChange={changeTextHandler}
        onPress={sendTextHandler}
      />
    </View>
  );
};

export default ConversationScreen;
