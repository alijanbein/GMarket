import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
const logo = require("../../../assets/logo.png");

const Welcome = () => {
  const authSlice = useSelector(state => state.auth);

  const navigation = useNavigation()
  useEffect(()=> {
      if(!authSlice.isLoggedin){
          setTimeout(()=>{
            navigation.navigate("auth_phone_input")
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
