import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "../screens/pofileScreen";
import Icon from 'react-native-vector-icons/FontAwesome5';

const TabStack = () => {
  const Tabs = createBottomTabNavigator();
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: () => 
            <Icon name="user" size={30} color="#000" />
          
        }}
        name="Profile"
        component={ProfileScreen}
      />
   
    </Tabs.Navigator>
  );
};

export default TabStack;
