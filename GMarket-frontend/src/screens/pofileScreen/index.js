import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./style";
import ProfileFeature from "../../components/profileFeature";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/slices/authSlice";
import { phoneStyle } from "../../contansts/styles";
const ProfileScreen = () => {
  const auth = useSelector(state => state.auth)
  const navigation = useNavigation()
  const dispatch = useDispatch()
  
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {navigation.navigate("Edit Profile")}}>
        <Text style={styles.name}>{`${auth.userData.first_name} ${auth.userData.last_name}`}</Text>
        <Text style={styles.number}>{`+${phoneStyle(auth.userData.phone_number)}`}</Text>
      </TouchableOpacity>
      <ProfileFeature onPress ={() =>{navigation.navigate("Edit Profile")}} title = "Profile" icon = "user-o"/>
      <ProfileFeature onPress ={() =>{navigation.navigate("Report User")}} title = "Report" icon = "exclamation-triangle"/>
      <ProfileFeature onPress = {() =>{navigation.navigate("Empty Screen")}} title = "Info" icon = "info"/>
      <ProfileFeature onPress = {() =>{dispatch(logout())}} title = "Log out" icon = "sign-out"/>
      <ProfileFeature />
    </View>
  );
}
export default ProfileScreen;