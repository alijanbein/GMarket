import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AuthPhoneInputScreen from '../screens/authPhoneInputScreen'
import Welcome from '../screens/welcome'

const AuthSatack = () => {
    const stack  = createStackNavigator()
  return (
   <stack.Navigator>
        <stack.Screen name='welcome' component={Welcome} />
        <stack.Screen name='auth_phone_input' component={AuthPhoneInputScreen} />
   </stack.Navigator>
  )
}

export default AuthSatack