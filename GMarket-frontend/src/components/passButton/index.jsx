import { View, Text, Button, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { style } from './styles'

const PassButton = (props) => {
  return (
    // <Button style = {style.btn} title={props.title} />
    <TouchableWithoutFeedback disabled ={!props.active}  onPress={props.active ? props.onPress : ()=>{}}>
        <View style = {[style.btn, props.active ? null :style.btnInactive]}>
            <Text style = {props.active ? style.textButtonActive :style.textButtonDisabled}>{props.title}</Text>
        </View>

    </TouchableWithoutFeedback>
    
  )
}

export default PassButton