import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { styles } from "./style";

const CategorieFeature = (props) => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.onPress(props.text);
      }}
      style={styles.container}
    >
      <Image
        style={styles.img}
        source={props.source}
      />
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default CategorieFeature;
