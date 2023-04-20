import { View, Text, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles";
import PassButton from "../../components/passButton";

const AuthPhoneInputScreen = () => {
  const [phoneNumber,setPhoneNumber] = useState('');
  const [isActive,setIsActive] = useState(false);

  const textChangeHandler = (text) => {
      setPhoneNumber(text)
  }

  useEffect(()=>{
      if(phoneNumber.length == 6){
        setIsActive(true)
      }
      else{
        setIsActive(false)

      }
  },[phoneNumber])

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        <Text style={styles.span}>Green</Text> Market
      </Text>
      <View style={styles.phone_input}>
        <View style={styles.phone}>
          <Text style={styles.label}>+961 </Text>
        </View>
        <TextInput onChangeText={textChangeHandler} value={phoneNumber} keyboardType='numeric' style={[styles.phone,styles.input]} placeholder="Phone Number" />
      </View>
      <View>
      <PassButton acitve = {isActive} title= "Continue"/>
      </View>
    </View>
  );
};

export default AuthPhoneInputScreen;
