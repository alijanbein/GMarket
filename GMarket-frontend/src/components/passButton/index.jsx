import { View, Text, Button, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { style } from './styles'

const PassButton = (props) => {
  return (
    // <Button style = {style.btn} title={props.title} />
    <TouchableWithoutFeedback>
        <View style = {style.btn}>
            <Text style = {style.textButton}>{props.title}</Text>
        </View>

    </TouchableWithoutFeedback>
    
  )
}

export default PassButton