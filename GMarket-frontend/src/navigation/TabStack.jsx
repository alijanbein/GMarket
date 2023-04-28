import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import IconI from "react-native-vector-icons/Ionicons";
import IconA from "react-native-vector-icons/MaterialCommunityIcons";
import { COLORS } from "../contansts/colors";
import Welcome from "../screens/welcome";
import { useNavigation } from "@react-navigation/native";
import HomeScreen from "../screens/homeScreen";
import MessagesScreen from "../screens/messagesScreen";
import AddPostScreen from "../screens/addPosterScreen";
import AuctionScreen from "../screens/auctionScreen";
import ProfileScreen from "../screens/PofileScreen"
const defaultState = {
  Home: 30,
  Auction: 30,
  Add: 30,
  Message: 30,
  Profile: 30,
};

const defaultStyle = {
  width: "100%",
  height: "100%",
  textAlign: "center",
  flex: 1,
  verticalAlign: "middle",
};

const TabStack = () => {
  const navigation = useNavigation();
  const Tabs = createBottomTabNavigator();
  const [iconSize, setIconSize] = useState(defaultState);

  useEffect(() => {
    navigation.navigate("Home");
    setIconSize({
      ...defaultState,
      Home: 40,
    });
  }, []);

  const activeIcon = (icon) => {
    setIconSize({
      ...defaultState,
      [icon]: 40,
    });
    navigation.navigate(icon);
  };

  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown:false,
        tabBarShowLabel: false,
      }}
      d
    >
      <Tabs.Screen
        options={{
          tabBarIcon: () => (
            <IconI
              style={defaultStyle}
              onPress={() => {
                activeIcon("Home");
              }}
              name="home-outline"
              size={iconSize.Home}
              color={COLORS.textColor}
            />
          ),
        }}
        name="Home"
        component={HomeScreen}
      />

      <Tabs.Screen
        options={{
          tabBarIcon: () => (
            <IconA
              style={defaultStyle}
              onPress={() => {
                activeIcon("Auction");
              }}
              name="gavel"
              size={iconSize.Auction}
              color={COLORS.textColor}
            />
          ),
        }}
        name="Auction"
        component={AuctionScreen}
      />
      <Tabs.Screen
        options={{
          tabBarIcon: () => (
            <Icon
              style={defaultStyle}
              name="edit"
              onPress={() => {
                activeIcon("Add");
              }}
              size={iconSize.Add}
              color={COLORS.textColor}
            />
          ),
          tabBarIconStyle: {},
        }}
        name="Add"
        component={AddPostScreen}
      />
      <Tabs.Screen
        options={{
          tabBarLabel: "Messages",
          tabBarIcon: () => (
            <Icon
              style={defaultStyle}
              name="envelope"
              onPress={() => {
                activeIcon("Message");
              }}
              size={iconSize.Message}
              color={COLORS.textColor}
            />
          ),
        }}
        name="Message"
        component={MessagesScreen}
      />
      <Tabs.Screen
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: () => (
            <Icon
              style={defaultStyle}
              name="user"
              onPress={() => {
                activeIcon("Profile");
              }}
              size={iconSize.Profile}
              color={COLORS.textColor}
            />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Tabs.Navigator>
  );
};

export default TabStack;
