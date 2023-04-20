import { View, Text, TextInput } from 'react-native'
import React from 'react'
import styles from './styles'

const AuthPhoneInputScreen = () => {
  return (
    <View style = {styles.container}>
        <Text style = {styles.header}><Text style={styles.span}>Green</Text> Market</Text>
        <View style = {styles.phone_input}>
        <Text>961</Text> 
        <TextInput style = {styles.phone_input} placeholder='alinj sama' />
         </View>
        <View style = {styles.input}><Text>961</Text></View>
    </View>
  )
}

export default AuthPhoneInputScreen