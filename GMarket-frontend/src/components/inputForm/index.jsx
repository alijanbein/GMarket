import { View, Text, TextInput } from "react-native";
import React from "react";
import { styles } from "./style";

const InputForm = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>First name:</Text>
      <TextInput placeholder="name" style={styles.input} />
    </View>
  );
};

export default InputForm;
