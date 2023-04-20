import { View, Text, Button } from 'react-native'
import React from 'react'

const PassButton = (props) => {
  return (
    <Button>{props.children}</Button>
  )
}

export default PassButton