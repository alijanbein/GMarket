import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import style from "./style";
import Avatar from "../../../../components/Avatar";
import PosterInfo from "../../../../components/PosterInfo";
import PersonRating from "../../../../components/Rating";
import PosterCard from "../../../../components/PosterCard";
import UseHttp from "../../../../hooks/http-hook";
import { useSelector } from "react-redux";
const PublicProfile = () => {
  const [error,isLoading,sendRequest] = UseHttp()
  const auth = useSelector(state => state.auth)
  const current = useSelector(state => state.current)
  const [rating,setRating] = useState(0)
  const [posters,setPosters] = useState([])
  const user = current.currentPersonData
  console.log(user);
  useEffect(() =>{
    console.log(current.currentPersonData);
    const fetshData = async() => {
      const formData = new FormData();
      formData.append("phone_number",user.phone_number)
      const response = await sendRequest("user/get_rate","POST",formData,{
        authorization: "Bearer " + auth.token
      })
      if(response.status == "sucess"){
        if(response.rating == null){
          setRating(3)
        }
        else {
          setRating(Math.floor(response.rating))
        }
      }
    }
    fetshData()
  },[])
  return (
    <View style={style.container}>
      <View style={style.header}>
        <View style={{ width: 70, height: 70 }}>
          <Avatar uri={user.profile_picture} />
        </View>
        <View style={style.info}>
          <Text style={style.name}>{user.first_name} {user.last_name}</Text>
          <Text style={style.name}>[Farmer]</Text>
        </View>
      </View>
      <View style={style.line} />
      {/* <PosterInfo keyname = "Rate" val = "4.5/5"/> */}
      <PersonRating/>
      <View style={style.line} />
      <Text style={style.posters}>Published Posters:</Text>
      <ScrollView style = {{marginTop:10}} contentContainerStyle ={{paddingBottom:40}} >
          <PosterCard/>
          <PosterCard/>
          <PosterCard/>
          <PosterCard/>
      </ScrollView>
      
    </View>
  );
};

export default PublicProfile;
