import { View, Text, Button, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { style } from './styles'

const PassButton = (props) => {
  return (
    // <Button style = {style.btn} title={props.title} />
    <TouchableWithoutFeedback onPress={props.acitve ? props.onPress : ()=>{}}>
        <View style = {[style.btn, props.acitve ? null :style.btnInactive]}>
            <Text style = {props.acitve ? style.textButtonActive :style.textButtonDisabled}>{props.title}</Text>
        </View>

    </TouchableWithoutFeedback>
    
  )
}

export default PassButton