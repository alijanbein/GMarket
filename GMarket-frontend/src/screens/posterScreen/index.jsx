import { View, Text, Image } from "react-native";
import React from "react";
import { styles } from "./style";
import PosterInfo from "../../components/PosterInfo";
import PassButton from "../../components/passButton";

const PosterScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ALi Janbein</Text>
      <Image
        style={styles.image}
        source={{ uri: "https://picsum.photos/id/1004/500/500" }}
      />
      <PosterInfo keyname="Product Name:" val="Cherry" />
      <PosterInfo keyname="First Price:" price val="10,000 LBP" />
      <PosterInfo keyname="Operation:" val="Every Day" />
      <PosterInfo
        keyname="Description:"
        desc
        val="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle"
      />
      <PassButton active ={true} title="Conatct" />
    </View>
  );
};

export default PosterScreen;
