import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./style";
import { useNavigation } from "@react-navigation/native";

const PosterCard = (props) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity onPress={
      ()=>{
        props.onPress()
        navigation.navigate("Poster Screen")}} style={styles.container}>
      <Image
        source={{ uri: props.data.image_url }}
        style={styles.image}
      />
      <View style={styles.info}>
        <Text style ={styles.name}>{props.data.title}</Text>
        <Text style ={styles.price}>{props.data.price} LBP</Text>
        <Text style ={styles.desc}>{props.data.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PosterCard;
