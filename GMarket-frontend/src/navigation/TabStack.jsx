import { View, Text } from "react-native";
import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "../screens/pofileScreen";
import Icon from "react-native-vector-icons/FontAwesome5";
import IconI from "react-native-vector-icons/Ionicons";
import IconA from "react-native-vector-icons/MaterialCommunityIcons";
import { COLORS } from "../contansts/colors";

const TabStack = () => {
  const Tabs = createBottomTabNavigator();
  const [iconSize,setIconSize] = useState({
    home: 30,
    auction : 30,
    add: 30,
    message:30,
    profile:30
  })

  const activeIcon = (icon) =>{
    setIconSize({
        ...iconSize,
        [icon]: 40
    })
  } 

  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        options={{
          tabBarIcon: () => (
            <IconI onPress = {()=>{activeIcon("home")}} name="home-outline" size={iconSize.home} color={COLORS.textColor} />
          ),
        }}
        name="Home"
        component={ProfileScreen}
      />

      <Tabs.Screen
        options={{
          tabBarIcon: () => (
            <IconA onPress = {()=>{activeIcon("auction")}} name="gavel" size={iconSize.auction} color={COLORS.textColor} />
          ),
        }}
        name="Add Post"
        component={ProfileScreen}
      />
      <Tabs.Screen
    
        options={{
          tabBarIcon: () => (
            <Icon name="edit" onPress = {()=>{activeIcon("add")}} size={iconSize.add} color={COLORS.textColor} />
          ),
        }}
        name="Auction"
        component={ProfileScreen}
      />
      <Tabs.Screen
        options={{
          tabBarLabel: "Messages",
          tabBarIcon: () => (
            <Icon name="envelope" onPress = {()=>{activeIcon("message")}} size={iconSize.message} color={COLORS.textColor} />
          ),
        }}
        name="Messages"
        component={ProfileScreen}
      />
      <Tabs.Screen
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: () => (
            <Icon  name="user" onPress = {()=>{activeIcon("profile")}} size={iconSize.profile} color={COLORS.textColor} />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Tabs.Navigator>
  );
};

export default TabStack;
