import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./style";
import { useNavigation } from "@react-navigation/native";

const PosterCard = () => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity onPress={()=>{navigation.navigate("Poster Screen")}} style={styles.container}>
      <Image
        source={{ uri: "https://picsum.photos/id/1004/500/500" }}
        style={styles.image}
      />
      <View style={styles.info}>
        <Text style ={styles.name}>Product Name </Text>
        <Text style ={styles.price}>9000 LBP</Text>
        <Text style ={styles.desc}>decription goes her fsefefsefsfsef fsefsd eesf se lorem upsum deuirun lorm upsum deurum</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PosterCard;
