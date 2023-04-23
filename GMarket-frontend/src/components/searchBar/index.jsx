import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { styles } from './style'

const SearchBar = () => {
  return (
    <View style ={styles.container}>
        <TextInput placeholder='product name' style={styles.search_input}  />
    </View>
  )
}

export default SearchBar