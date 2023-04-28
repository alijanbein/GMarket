import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './style'

const PosterInfo = (props) => {
  return (
    <View style={[styles.container,props.desc && styles.description]}>
      <Text style={styles.key_title}>{props.keyname}</Text>
      <Text style={[styles.key_title,props.price && styles.active,props.desc && styles.desc_text]}>{props.val} {props.price && "LBP"}</Text>
    </View>
  )
}

export default PosterInfo