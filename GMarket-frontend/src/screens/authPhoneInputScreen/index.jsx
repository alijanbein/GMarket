import { View, Text, TextInput } from "react-native";
import React from "react";
import styles from "./styles";
import PassButton from "../../components/passButton";

const AuthPhoneInputScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        <Text style={styles.span}>Green</Text> Market
      </Text>
      <View style={styles.phone_input}>
        <View style={styles.phone}>
          <Text style={styles.label}>+961 </Text>
        </View>
        <TextInput keyboardType='numeric' style={[styles.phone,styles.input]} placeholder="Phone Number" />
      </View>
      <View>
      <PassButton title= "Continue"/>
      </View>
    </View>
  );
};

export default AuthPhoneInputScreen;
