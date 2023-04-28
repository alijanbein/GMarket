import { View, Text, TextInput } from "react-native";
import React from "react";
import style from "./style";
import SendeButton from "../sendButton";
import { styles } from "../sendButton/style";

const ConversationTextInput = (props) => {
  return (
    <View style={style.container}>
      <TextInput
      value={props.value}
        onChangeText={props.onTextChange}
        style={style.text}
        placeholder="Enter your Text Here"
      />
      {props.showButton && <SendeButton onPress={props.onPress} />}
    </View>
  );
};

export default ConversationTextInput;
