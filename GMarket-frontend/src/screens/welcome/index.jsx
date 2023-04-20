import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import styles from "./styles";
const logo = require("../../../assets/logo.png");

const Welcome = () => {
  useEffect(()=> {
      
  },[])
  return (
    <View style={styles.container}>
      <Image style = {styles.logo} source={logo} />
    </View>
  );
};

export default Welcome;
