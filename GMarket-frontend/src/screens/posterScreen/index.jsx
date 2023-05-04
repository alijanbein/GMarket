import { View, Text, Image } from "react-native";
import React from "react";
import { styles } from "./style";
import PosterInfo from "../../components/PosterInfo";
import PassButton from "../../components/passButton";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { setCurrentPersonData } from "../../redux/slices/currentSlice";

const PosterScreen = () => {
  const current = useSelector(state => state.current);
  const data = current.currentPosterData
  const navigation = useNavigation();
  const dispatch = useDispatch()
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data.farmer.first_name} {data.farmer.last_name}</Text>
      <Image
        style={styles.image}
        source={{ uri: data.image_url }}
      />
      <PosterInfo keyname="Product Name:" val={data.title} />
      <PosterInfo keyname="First Price:" price val={data.price}  />
      <PosterInfo keyname="Operation:" val={data.operation} />
      <PosterInfo
        keyname="Description:"
        desc
        val={data.description}
      />
      <PassButton onPress = {() =>
      
      {
        dispatch(setCurrentPersonData(data.farmer))
        navigation.navigate("Conversation Screen")}} active ={true} title="Conatct" />
    </View>
  );
};

export default PosterScreen;
