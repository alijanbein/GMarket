import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './style'
import SearchBar from '../../components/searchBar'

const HomeScreen = () => {
  return (
    <View style ={styles.container}>
        <SearchBar/>
    </View>
  )
}

export default HomeScreen