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
          <Text style={style.name}>[{user.type}]</Text>
        </View>
      </View>
      <View style={style.line} />
      {/* <PosterInfo keyname = "Rate" val = "4.5/5"/> */}
      <PersonRating />
      <View style={style.line} />
      <Text style={style.posters}>Published Posters:</Text>
      <ScrollView
        style={{ marginTop: 10 }}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        {posters.length > 0 && posters.map((data, index) => <PosterCard data = {data}/>)}
        {posters.length == 0 && <Text style = {style.empty}>no posters yet</Text>}
      </ScrollView>
    </View>
  );
};

export default PublicProfile;
