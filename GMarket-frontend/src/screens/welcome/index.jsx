import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./styles";
const logo = require("../../../assets/logo.png");

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Image style = {styles.logo} source={logo} />
    </View>
  );
};

export default Welcome;
