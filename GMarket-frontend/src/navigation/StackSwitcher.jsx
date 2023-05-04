import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";
import AppStack from "./AppStack";
import AuthSatack from "./authSatack";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../screens/welcome";

const StackSwitcher = () => {
  const authSlice = useSelector((state) => state.auth);
  const stack = createStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{headerShown:false}}>
        <stack.Screen
       
          name="Welcome"
          component={Welcome}
        />
        <stack.Screen
     
          name="Second"
          component={authSlice.isLoggedin ? AppStack : AuthSatack}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default StackSwitcher;
