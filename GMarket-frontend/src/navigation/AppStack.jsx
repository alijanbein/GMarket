import { View, Text, BackHandler, Alert } from "react-native";
import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabStack from "./TabStack";
import EditProfileScreen from "../screens/PofileScreen/profileFeatureScreens/EditPorileScreen";
import ReportScreen from "../screens/PofileScreen/profileFeatureScreens/Reportscreen";
import EmptyScreen from "../screens/EmptyScren";
import { Tstyles } from "../contansts/styles";
import Welcome from "../screens/welcome";
import SearchScreen from "../screens/searchScreen";
import PosterScreen from "../screens/posterScreen";
import ConversationScreen from "../screens/conversationScreen";
import PublicProfile from "../screens/PofileScreen/profileFeatureScreens/publicProfile";
import BotConversation from "../screens/conversationScreen/BotConversation";
import CategorieScreen from "../screens/categoriesScreen";
import { useSelector } from "react-redux";
import { COLORS } from "../contansts/colors";

const AppStack = () => {
  const stack = createStackNavigator();
  const current = useSelector((state) => state.current);
  useEffect(() => {
    const backAction = () => {
      Alert.alert("Confirm exit", "Are you sure you want to exit?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel",
        },
        { text: "Exit", onPress: () => BackHandler.exitApp() },
      ]);
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    <stack.Navigator>
      <stack.Screen
        name="Tabs"
        options={{ headerShown: false }}
        component={TabStack}
      />
      <stack.Screen
        options={Tstyles.authOption}
        name="Report User"
        component={ReportScreen}
      />
      <stack.Screen
        options={Tstyles.authOption}
        name="Edit Profile"
        component={EditProfileScreen}
      />
      <stack.Screen
        options={Tstyles.authOption}
        name="Empty Screen"
        component={EmptyScreen}
      />
      <stack.Screen
        options={{
          headerTitle: "",
        }}
        name="Search Screen"
        component={SearchScreen}
      />
      <stack.Screen
        options={{
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "bold",
            color: COLORS.textColor,
          },
          title: `${current.currentCategorie}`,
        }}
        name="Categorie Screen"
        component={CategorieScreen}
      />
      <stack.Screen
        options={{
          headerShown: false,
        }}
        name="Bot"
        component={BotConversation}
      />
      <stack.Screen
        options={{
          headerTitle: "",
        }}
        name="Poster Screen"
        component={PosterScreen}
      />
      <stack.Screen
        options={{
          headerShown: false,
        }}
        name="Conversation Screen"
        component={ConversationScreen}
      />
      <stack.Screen
        options={Tstyles.authOption}
        name="Public Profile"
        component={PublicProfile}
      />
    </stack.Navigator>
  );
};

export default AppStack;
