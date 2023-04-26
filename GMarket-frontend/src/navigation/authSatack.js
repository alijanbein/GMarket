import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AuthPhoneInputScreen from "../screens/authPhoneInputScreen";
import Welcome from "../screens/welcome";
import CodeVerificationScreen from "../screens/codeVerificationScreen";
import { style } from "./styles";
import ProfileInfoScreen from "../screens/profileInfoScreen";
import CompleteProfileScren from "../screens/CompleteProfileScreen";
import { Tstyles } from "../contansts/styles";

const AuthSatack = () => {
  const stack = createStackNavigator();
  console.log("yes");
  return (
    <stack.Navigator>
      {/* <stack.Screen
       
        name="welcome"
        component={Welcome}
      /> */}
      <stack.Screen
        options={Tstyles.authOption}
        name="Code Verification"
        component={CodeVerificationScreen}
      />
      <stack.Screen
        options={{
          headerShown: false,
        }}
        name="auth_phone_input"
        component={AuthPhoneInputScreen}
      />
      
     
      
      <stack.Screen
        options={Tstyles.authOption}
        name="Profile Info"
        component={ProfileInfoScreen}
      />
      <stack.Screen
        options={Tstyles.authOption}
        name="Complete Profile Info"
        component={CompleteProfileScren}
      />
    </stack.Navigator>
  );
};

export default AuthSatack;
