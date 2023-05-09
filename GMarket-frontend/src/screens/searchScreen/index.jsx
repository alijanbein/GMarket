import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import SearchBar from '../../components/searchBar'
import styles from './style'
import PosterCard from '../../components/PosterCard'
import UseHttp from '../../hooks/http-hook'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentPosterData } from '../../redux/slices/currentSlice'

const SearchScreen = () => {
    const[searchText,setSeachText] = useState('');
    const [data,setData] = useState([])
    const auth = useSelector(state => state.auth)
    const [error,isLoading,sendRequest] = UseHttp();
    const dispatch = useDispatch()
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
        console.log(response);
          setData(response.search_response)
      }
    }
    console.log(data);
  return (
    <ScrollView style = {styles.container}  contentContainerStyle ={{paddingBottom:50}}>
        <SearchBar  onPress ={serchHandler}  textChange = {serchTextHandler} />
        {data && data.map((element,index) =>
            <PosterCard 
              onPress={() => {
              dispatch(setCurrentPosterData(element));
            }} key={index} data = {element}/>
          )}
    </ScrollView>
  )
}

export default SearchScreen