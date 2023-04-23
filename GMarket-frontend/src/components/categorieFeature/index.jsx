import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { styles } from './style'

const CategorieFeature = () => {
  return (
    <TouchableOpacity style={styles.container}>
        <Image style={styles.img} source={{uri: "https://picsum.photos/id/1004/500/500"}}/>
    </TouchableOpacity>
  )
}

export default CategorieFeature