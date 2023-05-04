import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import SearchBar from '../../components/searchBar'
import styles from './style'
import PosterCard from '../../components/PosterCard'
import UseHttp from '../../hooks/http-hook'
import { useSelector } from 'react-redux'

const SearchScreen = () => {
    const[searchText,setSeachText] = useState('');
    const [data,setData] = useState([])
    const auth = useSelector(state => state.auth)
    const [error,isLoading,sendRequest] = UseHttp();
    
    const serchTextHandler = (text) => {
      setSeachText(text)
    }

    const serchHandler =async() => {

      const formData = new FormData();
      formData.append("search_text",searchText) 
      const response = await sendRequest("user/search","Post",formData,{
        authorization: "Bearer " + auth.token
      })
      if (response.status ="sucess") {
          setData(response.search_response)
      }
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