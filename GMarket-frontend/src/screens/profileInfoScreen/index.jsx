import { View, Text } from "react-native";
import React from "react";
import { styles } from "./style";
import { Tstyles } from "../../contansts/styles";
import InputForm from "../../components/inputForm";

const ProfileInfoScreen = () => {
  return (
    <View style={Tstyles.container}>
      <Text style ={Tstyles.title}>Enter your personal info to complete your profile</Text>
      <View style ={styles.inputs}>
        <InputForm/>
      </View>
    </View>
  );
};

export default ProfileInfoScreen;
