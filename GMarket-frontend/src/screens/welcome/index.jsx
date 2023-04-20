import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
const logo = require("../../../assets/logo.png");

const Welcome = () => {
  const navigation = useNavigation()
  useEffect(()=> {
      if(true){
          setTimeout(()=>{
              
          },2000)
      }

  },[])
  return (
    <View style={styles.container}>
      <Image style = {styles.logo} source={logo} />
    </View>
  );
};

export default Welcome;
