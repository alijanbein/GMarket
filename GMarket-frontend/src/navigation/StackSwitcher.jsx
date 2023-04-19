import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { useSelector } from 'react-redux'

const StackSwitcher = () => {
    const authSlice = useSelector(state => state.auth)
  return (
    <NavigationContainer>
    </NavigationContainer>
  )
}

export default StackSwitcher