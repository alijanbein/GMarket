import { View, Text } from "react-native";
import React, { useState } from "react";
import { styles } from "./style";
import { Tstyles } from "../../contansts/styles";
import InputForm from "../../components/inputForm";
import TypeChoise from "../../components/TypeChoise";
import PassButton from "../../components/passButton";
import { style } from "../../components/passButton/styles";

const ProfileInfoScreen = () => {
  const [data,setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    type : ""
  })
  const [dataValid,setDataVAlid] = useState({
    first_name: true,
    last_name: true,
    email: true,
    type : true
  })
  const [typeActive,setTypeActive] = useState(true)

  const typePressHandler = (type) => {
      setTypeActive(!typeActive)
      setData(
       { ...data,
        type: type}
      )
    }
   const fnameHandler = (text) => {
    setData(
      { ...data,
        first_name: text}
     )
   }
   const lnameHandler = (text) => {
    setData(
      { ...data,
        last_name: text}
     )
   }
   const emailHandler = (text) => {
    setData(
      { ...data,
        email: text}
     )
   }

   const sendData = async() => {
    if (data.first_name.length < 1) {
      setDataVAlid(
        { ...dataValid,
          first_name: false}
       )
     }
    if (data.last_name.length < 1) {
      setDataVAlid(
        { ...dataValid,
          last_name: false}
       )
     }
    if (data.email.length < 1) {
      setDataVAlid(
        { ...dataValid,
          email: false}
       )
     }
     console.log(dataValid);
    };
   
   return (
    <View style={styles.container} >
      <View>
      <Text style ={Tstyles.title}>Enter your personal info to complete your profile</Text>
      <View style ={styles.inputs}>
        <InputForm onTextChange = {fnameHandler}  label = "First name" placeHolder = 'fname'/>
        <InputForm onTextChange = {lnameHandler} label = "Last name" placeHolder = 'lname'/>
        <InputForm keyboardType = "email-address" onTextChange = {emailHandler} label = "Email" placeHolder = 'email@gmail.com'/>
        <View style ={styles.type}>
          <TypeChoise onPress ={typePressHandler} isActive = {typeActive} text = "Farmer"/>
          <TypeChoise onPress ={typePressHandler} isActive = {!typeActive} text = "customer"/>
        </View>
      </View>
      </View>
      <PassButton onPress = {sendData} acitve ={true}  title = "continue" />
    </View>
  );
};

export default ProfileInfoScreen;
