import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import styles from "./styles";
import * as Font from 'expo-font';
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { FONTS } from "../../contansts/fonts";
const logo = require("../../../assets/logo.png");

const loadFonts = async () => {
  await Font.loadAsync({
    [FONTS.NotoSerifTamil.name]: { uri: FONTS.NotoSerifTamil.url },
  });
};


const Welcome = () => {
  const authSlice = useSelector(state => state.auth);
  const navigation = useNavigation()
  useEffect(()=> {
    loadFonts()
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
