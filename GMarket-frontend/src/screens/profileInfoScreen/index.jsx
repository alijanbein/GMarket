import { View, Text } from "react-native";
import React, { useState } from "react";
import { styles } from "./style";
import { Tstyles } from "../../contansts/styles";
import InputForm from "../../components/inputForm";
import TypeChoise from "../../components/TypeChoise";

const ProfileInfoScreen = () => {
  const [data,setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    type : ""
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
   console.log(data);
  return (
    <View style={Tstyles.container}>
      <Text style ={Tstyles.title}>Enter your personal info to complete your profile</Text>
      <View style ={styles.inputs}>
        <InputForm onTextChange = {fnameHandler}  label = "First name" placeHolder = 'fname'/>
        <InputForm onTextChange = {lnameHandler} label = "Last name" placeHolder = 'lname'/>
        <InputForm onTextChange = {emailHandler} label = "Email" placeHolder = 'email@gmail.com'/>
        <View style ={styles.type}>
          <TypeChoise onPress ={typePressHandler} isActive = {typeActive} text = "Farmer"/>
          <TypeChoise onPress ={typePressHandler} isActive = {!typeActive} text = "customer"/>
        </View>
      </View>
    </View>
  );
};

export default ProfileInfoScreen;
