import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { styles } from './style'
import SearchBar from '../../components/searchBar'

const HomeScreen = () => {
    const[searchText,setSeachText] = useState('')

    const serchTextHandler = (text) => {
        setSeachText(text)
    }

    const serchHandler =async() => {
        console.log(searchText);
    }
  return (
    <View style ={styles.container}>
        <SearchBar textChange ={serchTextHandler}  onPress = {serchHandler}/>
    </View>
  )
}

export default HomeScreen