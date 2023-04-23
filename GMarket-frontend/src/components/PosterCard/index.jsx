import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./style";

const PosterCard = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        source={{ uri: "https://picsum.photos/id/1004/500/500" }}
        style={styles.Image}
      />
      <View style={styles.info}>
        <Text>Product Name </Text>
        <Text>9000 LBP</Text>
        <Text>decription goes here lorem upsum deuirun lorm upsum deurum</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PosterCard;
