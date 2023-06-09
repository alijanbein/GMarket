import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles";
import * as Font from "expo-font";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { FONTS } from "../../contansts/fonts";
import UseHttp from "../../hooks/http-hook";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { login, setToken, setUserData } from "../../redux/slices/authSlice";
import {
  setCarouseImages,
  setCategores,
  setMessages,
  setRecomendedProduct,
} from "../../redux/slices/appDataSlice";

import logo from '../../../assets/logo.png'
const loadFonts = async () => {
  await Font.loadAsync({
    [FONTS.NotoSerifTamil.name]: { uri: FONTS.NotoSerifTamil.url },
  });
};

const Welcome = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState();
  const [a, s, sendRequest] = UseHttp();
  const navigation = useNavigation();

  useEffect(() => {
    loadFonts();

    const setData = async () => {
      const token = await AsyncStorage.getItem("token");
      let response
      if(token){
         response = await sendRequest(
          "user/get_user_by_nummber",
          "POST",
          "",
          {
            authorization: "Bearer " + token,
          }
        );
      }
      if (!!token && response.status == "sucess") {
        dispatch(setToken(token))
        const shows = await sendRequest("user/get_carousel_images", "GET", "", {
          authorization: "Bearer " + token,
        });
        if (shows.status == "sucess") {
          dispatch(setCarouseImages(shows.show[0].carousel));
          dispatch(setCategores(shows.show[0].categories));
        }
        const recomended = await sendRequest(
          "posts/get_recommended_posters",
          "GET",
          "",
          {
            authorization: "Bearer " + token,
          }
        );
        if(recomended.status == "sucess"){
          dispatch(setRecomendedProduct(recomended.posters))
        }
        const messages = await sendRequest("user/get_all_messaging_users","GET","",{
          authorization: "Bearer " + token,
        })
        dispatch(setMessages(messages.messages))
        dispatch(login());
        dispatch(setUserData(response.user));
      }
    };
    setData();
    setTimeout(() => {
      navigation.navigate("Second");
    }, 2000);
  }, []);
  
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo} />
    </View>
  );
};

export default Welcome;
