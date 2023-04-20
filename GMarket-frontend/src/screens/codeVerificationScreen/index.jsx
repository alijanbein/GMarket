import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './style'
import { useSelector } from 'react-redux'

const CodeVerificationScreen = () => {
    const auth = useSelector(state => state.auth)
    console.log(auth.phoneNumber);
  return (
    <View style = {styles.container}>
        <Text>{auth.phoneNumber}</Text>
    </View>
  )
}

export default CodeVerificationScreen