import React, { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import IconR from "react-native-vector-icons/FontAwesome";
import IconI from "react-native-vector-icons/Ionicons";
import IconA from "react-native-vector-icons/MaterialCommunityIcons";
import { COLORS } from "../contansts/colors";
import { useNavigation } from "@react-navigation/native";
import HomeScreen from "../screens/homeScreen";
import MessagesScreen from "../screens/messagesScreen";
import AddPostScreen from "../screens/addPosterScreen";
import AuctionScreen from "../screens/auctionScreen";
import ProfileScreen from "../screens/PofileScreen";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const defaultStyle = {
  // backgroundColor:"red",
  width: "100%",
  height: "100%",
  textAlign: "center",
  flex: 1,
  verticalAlign: "middle",
};

const TabStack = () => {
  const navigation = useNavigation();
  const Tabs = createBottomTabNavigator();
  const [activeIcon, setActiveIcon] = useState('home');
  // useEffect(() => {
  //   navigation.navigate("Home");
  //   setIconSize({
  //     ...defaultState,
  //     Home: 40,
  //   });
  // }, []);

  const activeIconHandler = (icon) => {
    setActiveIcon(icon)
    navigation.navigate(icon)
  };

  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        options={{
          tabBarIcon: () =>
            activeIcon == 'Home' ? (
              <Ionicons 
              style={defaultStyle}
              onPress={() => {
                  activeIconHandler("Home");
                }}
                name="home"
                size={30}
                color={COLORS.textColor}
              /> ):( <Ionicons 
                style={defaultStyle}

                onPress={() => {
                  activeIconHandler("Home");
                }}
                name="home-outline"
                size={30}
                color={COLORS.textColor}
              /> )
            
        }}
        name="Home"
        component={HomeScreen}
      />
      
    
      <Tabs.Screen
        options={{
          headerShown:true,
          headerTitleAlign: "center",
        headerTitleStyle:  {
          fontWeight: "bold",
          color:COLORS.textColor
          },
          title:"The Acution",
          tabBarIcon: () => (
            
            activeIcon == 'Auction' ? (
              <Icon 
              style={defaultStyle}

                name="gavel"
                size={30}
                color={COLORS.textColor}
                onPress={() => {
                  activeIconHandler("Auction");
                }}
              /> ):( <MaterialCommunityIcons 
                style={defaultStyle}

                onPress={() => {
                  activeIconHandler("Auction");
                }}
                name="gavel"
                solid={false}
                size={30}
                color={COLORS.textColor}
              /> )
          ),
        }}
        name="Auction"
        component={AuctionScreen}
      />
    
      <Tabs.Screen
        options={{
          headerShown:true,
          headerTitleAlign: "center",
        headerTitleStyle:  {
          fontWeight: "bold",
          color:COLORS.textColor
          },
          title:"Add Poster",
          tabBarIcon: () => (
            activeIcon == 'Add' ? (
              <MaterialIcons 
              style={defaultStyle}
              onPress={() => {
                  activeIconHandler("Add");
                }}
                name="add-circle"
                size={30}
                color={COLORS.textColor}
              /> ):( <MaterialIcons 
                style={defaultStyle}

                onPress={() => {
                  activeIconHandler("Add");
                }}
                name="add-circle-outline"
                solid={false}
                size={30}
                color={COLORS.textColor}
              /> )
          ),
          tabBarIconStyle: {},
        }}
        name="Add"
        component={AddPostScreen}
      />
      
      <Tabs.Screen
        options={{
          headerShown:true,
          headerTitleAlign: "center",
        headerTitleStyle:  {
          fontWeight: "bold",
          color:COLORS.textColor
          },
          title:"Inbox",
          tabBarIcon: () => (
            activeIcon == 'Message' ? (
              <IconR 
              style={defaultStyle}
              onPress={() => {
                  activeIconHandler("Message");
                }}
                name="envelope"
                size={30}
                color={COLORS.textColor}
              /> ):( <IconR 
                style={defaultStyle}

                onPress={() => {
                  activeIconHandler("Message");
                }}
                name="envelope-o"
                solid={false}
                size={30}
                color={COLORS.textColor}
              /> )
          ),
        }}
        name="Message"
        component={MessagesScreen}
      />
      
      <Tabs.Screen
        options={{
          tabBarLabel: "Profile",
          headerShown:true,
          headerTitleAlign: "center",
        headerTitleStyle:  {
          fontWeight: "bold",
          color:COLORS.textColor
          },
          title:"Profile",
          tabBarIcon: () => (
            activeIcon == 'Profile' ? (
              <IconR 
                style={defaultStyle}
                name="user"
                onPress={() => {
                  activeIconHandler("Profile");
                }}
                size={30}
                color={COLORS.textColor}
              /> ):( <Icon
                style={defaultStyle}

                onPress={() => {
                  activeIconHandler("Profile");
                }}
                name="user"
                solid={false}
                size={30}
                color={COLORS.textColor}
              /> )
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      /> 
    </Tabs.Navigator>
  );
};

export default TabStack;
