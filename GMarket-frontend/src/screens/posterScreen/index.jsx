import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './style'

const PosterScreen = () => {
  return (
    <View style ={styles.container}>
        <Text style ={styles.title}>ALi Janbein</Text>
        <Image style = {styles.image} source={{uri:"https://picsum.photos/id/1004/500/500"}} />
        
    </View>
  )
}

export default PosterScreen