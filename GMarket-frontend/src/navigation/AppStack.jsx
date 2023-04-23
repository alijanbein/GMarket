import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import TabStack from './TabStack'
import EditProfileScreen from '../screens/PofileScreen/profileFeatureScreens/EditPorileScreen'
import ReportScreen from '../screens/PofileScreen/profileFeatureScreens/Reportscreen'
import EmptyScreen from '../screens/EmptyScren'
import { Tstyles } from '../contansts/styles'

const AppStack = () => {
    const stack = createStackNavigator()
    return (
            <stack.Navigator>
                <stack.Screen name = "Tabs" options={{headerShown: false}} component={TabStack}/>
                <stack.Screen options={Tstyles.authOption} name = "Report User"  component={ReportScreen}/>
                <stack.Screen options={Tstyles.authOption} name = "Edit Profile"  component={EditProfileScreen}/>
                <stack.Screen options={Tstyles.authOption} name = "Empty Screen"  component={EmptyScreen}/>
            </stack.Navigator>
  )
}

export default AppStack