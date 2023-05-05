import { View, Text, TextInput } from "react-native";
import React from "react";
import { styles } from "./style";
import { COLORS } from "../../contansts/colors";
import { FontAwesome } from '@expo/vector-icons';

const InputForm = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}:</Text>
      <TextInput
        multiline
        numberOfLines={props.bio ? 5 : 1}
        keyboardType={props.keyboardType || "default"}
        onChangeText={props.onTextChange}
        value={props.value}
        placeholder={props.placeHolder}
        editable ={props.phone ? false : true}
        style={[styles.input, !props.invalid && styles.invalid,props.phone && {color:'gray'}]}
      />
      {
        props.phone && <FontAwesome style ={styles.icon} name="check" size={24} color={COLORS.main} />



      }
    </View>
  );
};

export default InputForm;
