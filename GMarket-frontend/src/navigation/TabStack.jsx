import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Welcome from '../screens/welcome'
import ProfileScreen from '../screens/pofileScreen'
import Icon from 'react-native-vector-icons/FontAwesome';

const TabStack = () => {
    const Tabs = createBottomTabNavigator()
  return (
   <Tabs.Navigator>
       
        <Tabs.Screen
            options={{
                tabBarIcon: () => {
                    <Text>home</Text>
                }
            }}
            name= "test"
            component={ProfileScreen}
        />

   </Tabs.Navigator>
  )
}

export default TabStack