import { View, Text } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import SearchBar from '../../components/searchBar'
import styles from './style'

const SearchScreen = () => {
    const[searchText,setSeachText] = useState('');
    

    const serchTextHandler = (text) => {
        setSeachText(text)
    }

    const serchHandler =async() => {
        console.log(searchText);
    }
  return (
    <View style = {styles.container}>
        <SearchBar  onPress ={serchHandler}  textChange = {serchTextHandler} />
    </View>
  )
}

export default SearchScreen