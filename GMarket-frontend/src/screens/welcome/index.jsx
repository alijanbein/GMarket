import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles";
import * as Font from 'expo-font';
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { FONTS } from "../../contansts/fonts";
import UseHttp from "../../hooks/http-hook";
const logo = require("../../../assets/logo.png");

const loadFonts = async () => {
  await Font.loadAsync({
    [FONTS.NotoSerifTamil.name]: { uri: FONTS.NotoSerifTamil.url },
  });
};


const Welcome = () => {
  const dispatch = useDispatch()
  const [isLoading,setIsLoading] = useState()
  const [a,s,sendRequest] = UseHttp()
  const authSlice = useSelector(state => state.auth);
  const navigation = useNavigation()
  useEffect(()=> {
    loadFonts()

    const setData = async () =>{
    }

      setTimeout(()=>{
        navigation.navigate("Second")
        
      },2000)
    

  },[])
  return (
    <View style={styles.container}>
      <Image style = {styles.logo} source={logo} />
    </View>
  );
};

export default Welcome;
