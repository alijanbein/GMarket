import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import SearchBar from '../../components/searchBar'
import styles from './style'
import PosterCard from '../../components/PosterCard'

const SearchScreen = () => {
    const[searchText,setSeachText] = useState('');
    const data =[1,2,3,4,5,6]


    const serchTextHandler = (text) => {
        setSeachText(text)
    }

    const serchHandler =async() => {
        console.log(searchText);
    }
  return (
    <ScrollView style = {styles.container}  contentContainerStyle ={{paddingBottom:50}}>
        <SearchBar  onPress ={serchHandler}  textChange = {serchTextHandler} />
        {data.map((element,index) =>
            <PosterCard key={index} data = {element}/>
          )}
    </ScrollView>
  )
}

export default SearchScreen