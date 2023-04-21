import { View, Text, TextInput } from "react-native";
import React from "react";
import { styles } from "./style";

const InputForm = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}:</Text>
      <TextInput onChangeText={props.onTextChange} value ={props.value} placeholder={props.placeholder} style={styles.input} />
    </View>
  );
};

export default InputForm;
