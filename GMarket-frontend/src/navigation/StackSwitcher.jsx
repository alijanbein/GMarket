import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { useSelector } from 'react-redux'

const StackSwitcher = () => {
    const authSlice = useSelector(state => state.auth)
  return (
    <NavigationContainer>
        {authSlice.isLoggedin ? <Text>true</Text> : <Text>false</Text>}
    </NavigationContainer>
  )
}

export default StackSwitcher