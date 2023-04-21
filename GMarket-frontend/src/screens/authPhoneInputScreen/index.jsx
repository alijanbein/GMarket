import { View, Text, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles";
import PassButton from "../../components/passButton";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setPhoneNumberSlice } from "../../redux/slices/authSlice";
const AuthPhoneInputScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isActive, setIsActive] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const textChangeHandler = (text) => {
    setPhoneNumber(text);
  };

  const clickHandler = () => {
    console.log(phoneNumber);
    dispatch(setPhoneNumberSlice(phoneNumber));
    navigation.navigate("Code Verification");
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
            style={[styles.phone, styles.input]}
            placeholder="Phone Number"
          />
          <Text style = {styles.invalid_text}>Invalid phone Number</Text>
        </View>
      </View>

      <View>
        <PassButton onPress={clickHandler} acitve={isActive} title="Continue" />
      </View>
    </View>
  );
};

export default AuthPhoneInputScreen;
