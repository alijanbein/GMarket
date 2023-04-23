import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { styles } from './style'
import SearchBar from '../../components/searchBar'
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const[searchText,setSeachText] = useState('')
    const navigation = useNavigation()
    const serchTextHandler = (text) => {
        setSeachText(text)
    }

    const serchHandler =async() => {
        console.log(searchText);
    }

    const fakeSeachhandler = () => {
        navigation.navigate("Search Screen")
    }       

  return (
    <View style ={styles.container}>
       <TouchableOpacity onPress={fakeSeachhandler} style ={styles.fakeSearch}>
       <AntDesign name="search1" size={20} color="black" />
        <Text style={{marginLeft:5}}>Search Product</Text>
       </TouchableOpacity>
    </View>
  )
}

export default HomeScreen