import { View, Text } from "react-native";
import React from "react";
import { styles } from "./style";
import Avatar from "../../components/Avatar";
import Icon from "react-native-vector-icons/Ionicons";
import ConversationTextInput from "../../components/conversationTextInput";

const ConversationScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon style={styles.icon}  name="arrow-back" size={24} color="#000" />

        <View style={{ width: 60, height: 60 ,marginLeft:15}}>
          <Avatar uri="https://picsum.photos/id/1004/500/500" />
        </View>
        <Text style={styles.name}>Ali Janbein</Text>
      </View>
          <ConversationTextInput/>
    </View>
  );
};

export default ConversationScreen;
