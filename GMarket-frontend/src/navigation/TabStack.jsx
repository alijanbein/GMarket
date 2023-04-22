import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "../screens/pofileScreen";
import Icon from "react-native-vector-icons/FontAwesome5";
import IconF from "react-native-vector-icons/FontAwesome";
import IconI from 'react-native-vector-icons/Ionicons';
import IconG from 'react-native-vector-icons/Entypo';
import IconA from 'react-native-vector-icons/MaterialCommunityIcons';


const TabStack = () => {
  const Tabs = createBottomTabNavigator();
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        options={{
          tabBarLabel: "Home",
          tabBarIcon: () => <IconI name="home-outline" size={30} color="#000" />,
        }}
        name="Home"
        component={ProfileScreen}
      />

      <Tabs.Screen
        options={{
          tabBarLabel: "Add",
          tabBarIcon: () => <IconA name="gavel" size={30} color="#000" />,
        }}
        name="Add Post"
        component={ProfileScreen}
      />
      <Tabs.Screen
        options={{
          tabBarLabel: "Auction",
          tabBarIcon: () => <Icon name="edit" size={30} color="#000" />,
        }}
        name="Auction"
        component={ProfileScreen}
      />
      <Tabs.Screen
        options={{
          tabBarLabel: "Messages",
          tabBarIcon: () => <Icon name="envelope" size={30} color="#000" />,
        }}
        name="Messages"
        component={ProfileScreen}
      />
      <Tabs.Screen
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: () => <Icon name="user" size={30} color="#000" />,
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Tabs.Navigator>
  );
};

export default TabStack;
