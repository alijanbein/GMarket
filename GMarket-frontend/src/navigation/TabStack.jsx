import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Welcome from '../screens/welcome'

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
            component={Welcome}
        />
        <Tabs.Screen
            options={{
                tabBarIcon: () => {
                    <Text>home</Text>
                }
            }}
            name= "test"
            component={Welcome}
        />

   </Tabs.Navigator>
  )
}

export default TabStack