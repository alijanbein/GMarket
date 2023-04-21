import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import AppStack from './AppStack'
import AuthSatack from './authSatack'
import CompleteProfileScren from '../screens/CompleteProfileScreen'

const StackSwitcher = () => {
    const authSlice = useSelector(state => state.auth)
  return (
    <NavigationContainer>
        {authSlice.isLoggedin ? <AppStack/> : <CompleteProfileScren/>}
    </NavigationContainer>
  )
}

export default StackSwitcher