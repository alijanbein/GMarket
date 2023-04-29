import { View, Text } from "react-native";
import React from "react";
import style from "./style";
import Avatar from "../../../../components/Avatar";
import PosterInfo from "../../../../components/PosterInfo";
import PersonRating from "../../../../components/Rating";
const PublicProfile = () => {
  return (
    <View style={style.container}>
      <View style={style.header}>
        <View style={{ width: 70, height: 70 }}>
          <Avatar uri="https://picsum.photos/id/1006/500/500" />
        </View>
        <View style={style.info}>
          <Text style={style.name}>ALI Janbein</Text>
          <Text style={style.name}>[Farmer]</Text>
        </View>
      </View>
      <View style={style.line} />
      {/* <PosterInfo keyname = "Rate" val = "4.5/5"/> */}
      <PersonRating/>
      <View style={style.line} />

      
    </View>
  );
};

export default PublicProfile;
