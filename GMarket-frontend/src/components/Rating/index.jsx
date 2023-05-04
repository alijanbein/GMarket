import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import style from "./style";
import UseHttp from "../../hooks/http-hook";
import { useSelector } from "react-redux";
import LoadingOverlay from "../loadingOverlay";

const PersonRating = (props) => {
  const [error, isLoading, sendRequest] = UseHttp();
  const auth = useSelector((state) => state.auth);
  const current = useSelector((state) => state.current);
  const [rating, setRating] = useState(props.rate);
  const user = current.currentPersonData;
  const addRate = async() => {
      const formData = new FormData();
      formData.append("phone_number",user.phone_number);
      formData.append("rating",rating)
      const response = await sendRequest("user/add_rate", "POST", formData, {
        authorization: "Bearer " + auth.token,
      });
      if (response.status == "sucess") {
      }
  }
  useEffect(() => {
    const fetshData = async () => {
      const formData = new FormData();
      formData.append("phone_number", user.phone_number);
      const response = await sendRequest("user/get_rate", "POST", formData, {
        authorization: "Bearer " + auth.token,
      });
      if (response.status == "sucess") {
        if (response.rating == null) {
          setRating(3);
        } else {
          setRating(Math.floor(response.rating));
        }
      }
    };
    fetshData();
  }, []);
  const handleRating = (value) => {
    setRating(value);
  };

  const renderRating = () => {
    let ratings = [];
    for (let i = 1; i <= 5; i++) {
      let iconName = "star-outline";
      if (i <= rating) {
        iconName = "star";
      }
      ratings.push(
        <TouchableOpacity key={i} onPress={async() => {
          await addRate()
          handleRating(i)}}>
          <Icon name={iconName} size={25} color="#F5B041" />
        </TouchableOpacity>
      );
    }
    return ratings;
  };

  return (
    <View style={style.container}>
    {isLoading && <LoadingOverlay/>}
      <Text style={style.title}>Rate this person:</Text>
      {!!!props.rating && (
        <View style={style.ratingContainer}>{renderRating()}</View>
      )}
      {!!props.rating && <Text style={style.title}>4.5/5</Text>}
    </View>
  );
};

export default PersonRating;
