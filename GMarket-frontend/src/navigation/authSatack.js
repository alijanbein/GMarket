import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AuthPhoneInputScreen from "../screens/authPhoneInputScreen";
import CodeVerificationScreen from "../screens/codeVerificationScreen";
import ProfileInfoScreen from "../screens/profileInfoScreen";
import CompleteProfileScren from "../screens/CompleteProfileScreen";
import { Tstyles } from "../contansts/styles";

const AuthSatack = () => {
  const stack = createStackNavigator();
  return (
    <stack.Navigator>
      <stack.Screen
        options={{
          headerShown: false,
        }}
        name="auth_phone_input"
        component={AuthPhoneInputScreen}
      />

        <stack.Screen
    options={Tstyles.authOption}
        name="Code Verification"
        component={CodeVerificationScreen}
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
