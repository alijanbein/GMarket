import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useEffect, useRef } from "react";
import { styles } from "./style";
import { AntDesign } from "@expo/vector-icons";

const SearchBar = (props) => {
  
      return (
    <View style={styles.container}>
      <TextInput autoFocus={true} onChangeText={props.textChange} placeholder="product name" style={styles.search_input} />
      <TouchableOpacity onPress={props.onPress} style={styles.serach_btn}>
        <AntDesign name="search1" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
