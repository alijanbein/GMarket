import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./style";
import Icon from "react-native-vector-icons/MaterialIcons";

const SendeButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.container}>
      <Icon name="send" size={30} color="#000" />
    </TouchableOpacity>
  );
};

export default SendeButton;
