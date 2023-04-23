import { View, Text } from "react-native";
import React from "react";
import { styles } from "./style";
import ProfileFeature from "../../components/profileFeature";
const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.name}>ALi Janbein</Text>
        <Text style={styles.number}>+961999000</Text>
      </View>
      <ProfileFeature />
      <ProfileFeature />
      <ProfileFeature />
    </View>
  );
}
export default ProfileScreen;