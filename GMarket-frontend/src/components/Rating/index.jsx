import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import style from "./style";

const PersonRating = (props) => {
  const [rating, setRating] = useState(4);

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
        <TouchableOpacity key={i} onPress={() => handleRating(i)}>
          <Icon name={iconName} size={25} color="#F5B041" />
        </TouchableOpacity>
      );
    }
    return ratings;
  };

  return (
    <View style={style.container}>
      <Text style={style.title}>Rate this person:</Text>
      {!!!props.rating && (
        <View style={style.ratingContainer}>{renderRating()}</View>
      )}
      {
        !!props.rating &&       <Text style={style.title}>4.5/5</Text>

      }
    </View>
  );
};

export default PersonRating;
