import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./style";

const PosterCard = () => {
  return (
    <TouchableOpacity style={styles.container}>
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
