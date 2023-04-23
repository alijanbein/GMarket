import { View, Text } from 'react-native'
import React from 'react'
import SearchBar from '../../components/searchBar'
import styles from './style'

const SearchScreen = () => {
  return (
    <View style = {styles.container}>
        <SearchBar />
    </View>
  )
}

export default SearchScreen