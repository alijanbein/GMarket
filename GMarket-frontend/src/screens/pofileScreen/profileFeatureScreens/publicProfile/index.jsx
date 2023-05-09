import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import style from "./style";
import Avatar from "../../../../components/Avatar";
import PersonRating from "../../../../components/Rating";
import PosterCard from "../../../../components/PosterCard";
import UseHttp from "../../../../hooks/http-hook";
import { useSelector } from "react-redux";
import { phoneStyle } from "../../../../contansts/styles";
const PublicProfile = () => {
  const [error, isLoading, sendRequest] = UseHttp();
  const auth = useSelector((state) => state.auth);
  const current = useSelector((state) => state.current);
  const [posters, setPosters] = useState([]);
  const user = current.currentPersonData;
  console.log(user);
  useEffect(() => {
    const fetshData = async () => {
      const formData = new FormData();
      formData.append("userId", user._id);
      const response = await sendRequest(
        "posts/get_poster_by_user_id",
        "POST",
        formData,
        {
          authorization: "Bearer " + auth.token,
        }
      );
      if (response.status == "sucess") {
        console.log(response.posters);
        setPosters(response.posters);
      }
    };
    fetshData();
  }, []);

  
  
  return (
    <View style={style.container}>
      <View style={style.header}>
        <View style={{ width: 70, height: 70 }}>
          <Avatar uri={user.profile_picture} />
        </View>
        <View style={style.info}>
          <Text style={style.name}>
            {user.first_name} {user.last_name}
          </Text>
          <Text style={[style.name,{fontSize:15,marginTop:5}]}>[{phoneStyle(user.phone_number)}]</Text> 
        </View>
      </View>
      <View style={style.line} />
      <PersonRating />
      <View style={style.line} />
      <Text style={style.posters}>Published Posters:</Text>
      <ScrollView
        style={{ marginTop: 10 }}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        {posters.length > 0 && posters.map((data, index) => <PosterCard key={index} data = {data}/>)}
        {posters.length == 0 && <Text style = {style.empty}>no posters yet</Text>}
      </ScrollView>
    </View>
  );
};

export default PublicProfile;
