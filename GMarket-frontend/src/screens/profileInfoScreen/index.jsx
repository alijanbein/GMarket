import { View, Text } from "react-native";
import React, { useState } from "react";
import { styles } from "./style";
import { Tstyles } from "../../contansts/styles";
import InputForm from "../../components/inputForm";

const ProfileInfoScreen = () => {
  const [data,setData] = useState({
    first_name: "",
    lastt_name: "",
    email: "",
    type : ""
  })
  return (
    <View style={Tstyles.container}>
      <Text style ={Tstyles.title}>Enter your personal info to complete your profile</Text>
      <View style ={styles.inputs}>
        <InputForm label = "First name" placeHolder = 'fname'/>
        <InputForm label = "Last name" placeHolder = 'lname'/>
        <InputForm label = "Email" placeHolder = 'email@gmail.com'/>
        
      </View>
    </View>
  );
};

export default ProfileInfoScreen;
