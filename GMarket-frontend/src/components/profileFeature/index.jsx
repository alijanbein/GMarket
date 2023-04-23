import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./style";
import Icon from "react-native-vector-icons/FontAwesome";

const ProfileFeature = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Icon name="credit-card" size={30} color="#000" />
      <Text style = {styles.title}>Payment</Text>
    </TouchableOpacity>
  );
};

export default ProfileFeature;
