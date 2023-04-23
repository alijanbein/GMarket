import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import TabStack from './TabStack'
import EditProfileScreen from '../screens/PofileScreen/profileFeatureScreens/EditPorileScreen'
import ReportScreen from '../screens/PofileScreen/profileFeatureScreens/Reportscreen'

const AppStack = () => {
    const stack = createStackNavigator()
    return (
            <stack.Navigator>
                <stack.Screen name = "Tabs" options={{headerShown: false}} component={TabStack}/>
                <stack.Screen name = "Edit Profile"  component={EditProfileScreen}/>
                <stack.Screen name = "Report User"  component={ReportScreen}/>
            </stack.Navigator>
  )
}

export default AppStack