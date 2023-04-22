import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "../screens/pofileScreen";
import Icon from "react-native-vector-icons/FontAwesome5";

const TabStack = () => {
  const Tabs = createBottomTabNavigator();
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        options={{
          tabBarLabel: "Home",
          tabBarIcon: () => <Icon name="user" size={30} color="#000" />,
        }}
        name="Home"
        component={ProfileScreen}
      />

      <Tabs.Screen
        options={{
          tabBarLabel: "Add",
          tabBarIcon: () => <Icon name="user" size={30} color="#000" />,
        }}
        name="Add Post"
        component={ProfileScreen}
      />
      <Tabs.Screen
        options={{
          tabBarLabel: "Auction",
          tabBarIcon: () => <Icon name="user" size={30} color="#000" />,
        }}
        name="Auction"
        component={ProfileScreen}
      />
      <Tabs.Screen
        options={{
          tabBarLabel: "Messages",
          tabBarIcon: () => <Icon name="user" size={30} color="#000" />,
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
