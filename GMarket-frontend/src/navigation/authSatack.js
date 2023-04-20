import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AuthPhoneInputScreen from "../screens/authPhoneInputScreen";
import Welcome from "../screens/welcome";
import CodeVerificationScreen from "../screens/codeVerificationScreen";
import { style } from "./styles";

const AuthSatack = () => {
  const stack = createStackNavigator();
  return (
    <stack.Navigator>
     
      <stack.Screen
        options={{
          headerShown: false,
        }}
        name="welcome"
        component={Welcome}

      />
      <stack.Screen
        options={{
          headerShown: false,
        }}
        name="auth_phone_input"
        component={AuthPhoneInputScreen}
      />
       <stack.Screen
        options={{
          headerTitleAlign: "center",
          headerTitleStyle: style.headerTitle,
        }}
        name="Code Verification"
        component={CodeVerificationScreen}
      />
    </stack.Navigator>
  );
};

export default AuthSatack;
