import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useRef, useState } from 'react'
import { styles } from './style'
import { useSelector } from 'react-redux'

const CodeVerificationScreen = () => {
    const auth = useSelector(state => state.auth)
    const input1Ref = useRef()
    const input2Ref = useRef()
    const input3Ref = useRef()
    const input4Ref = useRef()
    const inputs = [input1Ref,input2Ref,input3Ref,input4Ref];
    const [code,setCode] = useState(["1","2","3","4"])
    const handleKeyPress = (index, event) => {
      console.log(event.nativeEvent.key);
      if (event.nativeEvent.key === 'Backspace' && index > 0) {
        inputs[index - 1].current?.focus();
        // setCode(prev => prev[index] = "")
      }
      else if( event.nativeEvent.key !== 'Backspace' && index < inputs.length -1) {
        inputs[index + 1].current?.focus();
        // setCode(prev => prev[index] = event.nativeEvent.key)
      }
    };
    // console.log(code);
    return (
    <View style = {styles.container}>
        <Text style = {styles.title}>{`Enter the code send to +961 ${auth.phoneNumber}`}</Text>
        <View style = {styles.inputContainer}>
        <TextInput
  
          style={styles.box}
          maxLength={1}
          keyboardType="numeric"
          ref={input1Ref}
          onKeyPress={(e)=>{
            handleKeyPress(0,e)
          }}
        />
             <TextInput
          style={styles.box}
          maxLength={1}
          keyboardType="numeric"
          ref={input2Ref}
          onKeyPress={(e)=>{
            handleKeyPress(1,e)
          }}
          
        />
             <TextInput
          style={styles.box}
          maxLength={1}
          keyboardType="numeric"
          ref={input3Ref}
          onKeyPress={(e)=>{
            handleKeyPress(2,e)
          }}
        />
             <TextInput
          style={styles.box}
          maxLength={1}
          keyboardType="numeric"
          ref={input4Ref}
          onKeyPress={(e)=>{
            handleKeyPress(3,e)
          }}
        />
        </View>
    </View>
  )
}


export default CodeVerificationScreen