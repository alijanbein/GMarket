import { View, Text } from "react-native";
import React from "react";
import { styles } from "./style";
import ProfileFeature from "../../components/profileFeature";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slices/authSlice";
const ProfileScreen = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.name}>ALi Janbein</Text>
        <Text style={styles.number}>+961999000</Text>
      </View>
      <ProfileFeature onPress = {() =>{navigation.navigate("Empty Screen")}} title = "Payment" icon ="credit-card" />
      <ProfileFeature onPress ={() =>{navigation.navigate("Edit Profile")}} title = "Profile" icon = "user-o"/>
      <ProfileFeature onPress ={() =>{navigation.navigate("Report User")}} title = "Report" icon = "exclamation-triangle"/>
      <ProfileFeature onPress = {() =>{navigation.navigate("Empty Screen")}} title = "Info" icon = "info"/>
      <ProfileFeature onPress = {() =>{dispatch(logout())}} title = "Log out" icon = "sign-out"/>
      <ProfileFeature />
    </View>
  );
}
export default ProfileScreen;