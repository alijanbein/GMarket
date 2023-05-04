import { View, Text } from "react-native";
import React, { useState } from "react";
import { styles } from "./style";
import { Tstyles } from "../../contansts/styles";
import InputForm from "../../components/inputForm";
import TypeChoise from "../../components/TypeChoise";
import PassButton from "../../components/passButton";
import { style } from "../../components/passButton/styles";
import { SPACING, emailRegex } from "../../contansts/spacing";
import { useNavigation } from "@react-navigation/native";
import UseHttp from "../../hooks/http-hook";
import LoadingOverlay from "../../components/loadingOverlay";
import { useDispatch, useSelector } from "react-redux";
import { login, setToken, setUserData } from "../../redux/slices/authSlice";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setCarouseImages, setCategores, setMessages, setRecomendedProduct } from "../../redux/slices/appDataSlice";

const ProfileInfoScreen = () => {
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)
  const navigation = useNavigation();
  const [isLoading,setIsLoading] = useState(false)
  const [i,error,sendRequest] = UseHttp()
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    type: "farmer",
  });
  const [dataValid, setDataVAlid] = useState({
    first_name: true,
    last_name: true,
    email: true,
  });
  const [typeActive, setTypeActive] = useState(true);

  const typePressHandler = (type) => {
    setTypeActive(!typeActive);
    setData({ ...data, type: type });
  };
  const fnameHandler = (text) => {
    setDataVAlid({
      first_name: true,
      last_name: true,
      email: true,
    });
    setData({ ...data, first_name: text });
  };
  const lnameHandler = (text) => {
    setDataVAlid({
      first_name: true,
      last_name: true,
      email: true,
    });
    setData({ ...data, last_name: text });
  };
  const emailHandler = (text) => {
    setDataVAlid({
      first_name: true,
      last_name: true,
      email: true,
    });
    setData({ ...data, email: text });
  };

  const sendData = async () => {
    let valid = true;
    if (data.last_name.length < 1) {
      setDataVAlid({ ...dataValid, last_name: false });
      valid = false;
    }
    if (data.first_name.length < 1) {
      setDataVAlid({ ...dataValid, first_name: false });
      valid = false;
    }

    if (!emailRegex.test(data.email)) {
      valid = false;
      setDataVAlid({ ...dataValid, email: false });
    }
    if (valid) {
      setIsLoading(true)
      const formData = new FormData()
      formData.append("first_name",data.first_name);
      formData.append("email",data.email);
      formData.append("phone_number","961"+auth.phoneNumber);
      formData.append("type",data.type);
      formData.append("last_name",data.last_name);
      const response  = await sendRequest("auth/register","POST",formData,{});
      if(response.status == "sucess"){
        const token = response.token


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
          "POST",
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
        dispatch(setUserData(response.user));



        await AsyncStorage.setItem("token",response.token)
        setIsLoading(false)
        navigation.navigate("Complete Profile Info");
      }
      else{
        console.log("response","can't");
      }
    }
  };

  return (
    <View style={styles.container}>
      {isLoading && <LoadingOverlay/>}
      <View>
        <Text style={Tstyles.title}>
          Enter your personal info to complete your profile
        </Text>
        <View style={styles.inputs}>
          <InputForm
            value={data.first_name}
            onTextChange={fnameHandler}
            label="First name"
            placeHolder="fname"
            invalid={dataValid.first_name}
          />
          <InputForm
            value={data.last_name}
            onTextChange={lnameHandler}
            label="Last name"
            placeHolder="lname"
            invalid={dataValid.last_name}
          />
          <InputForm
            value={data.email}
            keyboardType="email-address"
            onTextChange={emailHandler}
            label="Email"
            placeHolder="email@gmail.com"
            invalid={dataValid.email}
          />
          <View style={styles.type}>
            <TypeChoise
              onPress={typePressHandler}
              isActive={typeActive}
              text="farmer"
            />
            <TypeChoise
              onPress={typePressHandler}
              isActive={!typeActive}
              text="customer"
            />
          </View>
        </View>
      </View>
      <PassButton onPress={sendData} active={true} title="continue" />
    </View>
  );
};

export default ProfileInfoScreen;
