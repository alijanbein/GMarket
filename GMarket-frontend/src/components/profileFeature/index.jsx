import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./style";
import Icon from "react-native-vector-icons/FontAwesome";

const ProfileFeature = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.container}>
      <Icon name={props.icon} size={30} color="#000" />
      <Text style = {styles.title}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default ProfileFeature;
