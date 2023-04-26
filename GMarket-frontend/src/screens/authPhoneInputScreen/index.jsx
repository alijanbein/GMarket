import { View, Text, TextInput, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles";
import PassButton from "../../components/passButton";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setPhoneNumberSlice } from "../../redux/slices/authSlice";
import { COLORS } from "../../contansts/colors";
import LoadingOverlay from "../../components/loadingOverlay";
import axios from 'axios';
import UseHttp from "../../hooks/http-hook";
const AuthPhoneInputScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [isLoading,error,sendRequest] = UseHttp()
  const textChangeHandler = (text) => {
    setIsValid(true);
    setPhoneNumber(text);
  };

  const clickHandler = async () => {
    dispatch(setPhoneNumberSlice(phoneNumber));
    const formData = new FormData()
    formData.append("phone_number","961"+phoneNumber)
    const data = await sendRequest("auth/send_verification_code_sms","POST",formData)
    console.log(data);
    if(data.status == "sucess"){

        navigation.navigate("Code Verification");
    }
    else {
      console.log("no");
    }
  };

  useEffect(() => {
    if (phoneNumber.length == 8) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [phoneNumber]);



  return (
    <View style={styles.container}>
      {isLoading && <LoadingOverlay/>}
      <Text style={styles.header}>
        <Text style={styles.span}>Green</Text> Market
      </Text>
      <View style={styles.phone_input}>
        <View style={styles.phone}>
          <Text style={styles.label}>+961 </Text>
        </View>

        <View style={styles.invalid_container}>
          <TextInput
            onChangeText={textChangeHandler}
            value={phoneNumber}
            keyboardType="numeric"
            style={[
              styles.phone,
              styles.input,
              !isValid && styles.invalid_input,
            ]}
            placeholder="Phone Number"
          />
          {!isValid && (
            <Text style={styles.invalid_text}>
              Please enter a valid phone number{" "}
            </Text>
          )}
        </View>
      </View>

      <View>
        <PassButton onPress={clickHandler} active={isActive} title="Continue" />
      </View>
    </View>
  );
};

export default AuthPhoneInputScreen;
