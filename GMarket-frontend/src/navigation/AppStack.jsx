import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import TabStack from './TabStack'

const AppStack = () => {
    const stack = createStackNavigator()
    return (
            <stack.Navigator>
                <stack.Screen name = "Tabs" component={TabStack}/>
            </stack.Navigator>
  )
}

export default AppStack