import { View, Text } from "react-native";
import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "../screens/pofileScreen";
import Icon from "react-native-vector-icons/FontAwesome5";
import IconI from "react-native-vector-icons/Ionicons";
import IconA from "react-native-vector-icons/MaterialCommunityIcons";
import { COLORS } from "../contansts/colors";
import Welcome from "../screens/welcome";
import { useNavigation } from "@react-navigation/native";

    const defaultState = {
        Home: 30,
        Auction : 30,
        Add: 30,
        Message:30,
        Profile:30
      }

const TabStack = () => {
    const navigation = useNavigation()
  const Tabs = createBottomTabNavigator();
  const [iconSize,setIconSize] = useState(defaultState)

  const activeIcon = (icon) =>{
    setIconSize({
        ...defaultState,
        [icon]: 40
    })
    navigation.navigate(icon)
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
            <IconI onPress = {()=>{activeIcon("Home")}} name="home-outline" size={iconSize.Home} color={COLORS.textColor} />
          ),
        }}
        name="Home"
        component={ProfileScreen}
      />

      <Tabs.Screen
        options={{
          tabBarIcon: () => (
            <IconA onPress = {()=>{activeIcon("Auction")}} name="gavel" size={iconSize.Auction} color={COLORS.textColor} />
          ),
        }}
        name="Auction"
        component={ProfileScreen}
      />
      <Tabs.Screen
    
        options={{
          tabBarIcon: () => (
            <Icon name="edit" onPress = {()=>{activeIcon("Add")}} size={iconSize.Add} color={COLORS.textColor} />
          ),
        }}
        name="Add"
        component={ProfileScreen}
      />
      <Tabs.Screen
        options={{
          tabBarLabel: "Messages",
          tabBarIcon: () => (
            <Icon name="envelope" onPress = {()=>{activeIcon("Message")}} size={iconSize.Message} color={COLORS.textColor} />
          ),
        }}
        name="Message"
        component={Welcome}
      />
      <Tabs.Screen
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: () => (
            <Icon  name="user" onPress = {()=>{activeIcon("Profile")}} size={iconSize.Profile} color={COLORS.textColor} />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Tabs.Navigator>
  );
};

export default TabStack;
