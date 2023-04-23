import { View, Text, TextInput, TouchableOpacity } from 'react-native'
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
       <TouchableOpacity style ={styles.fakeSearch}>
        <Text>Search Product</Text>
       </TouchableOpacity>
    </View>
  )
}

export default HomeScreen