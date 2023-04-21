import { View, Text, TextInput } from "react-native";
import React from "react";
import { styles } from "./style";

const InputForm = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}:</Text>
      <TextInput keyboardType={props.keyboardType || "default"} onChangeText={props.onTextChange} value ={props.value} placeholder={props.placeHolder} style={[styles.input,!props.invalid && styles.invalid]} />
    </View>
  );
};

export default InputForm;
