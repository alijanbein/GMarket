import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { styles } from "./style";
import Avatar from "../Avatar";
import { width } from "deprecated-react-native-prop-types/DeprecatedImagePropType";
import { useNavigation } from "@react-navigation/native";

const UserCoversationCard = (props) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity
      onPress={()=>{
        navigation.navigate("Conversation Screen")
      }}
      style={[styles.container, props.bot && styles.botContainer]}
    >
      <View style={{ width: 50, height: 50 }}>
        <Avatar uri={props.profile_picture} />
      </View>
      <View style={styles.info}>
        <Text style={[styles.name,props.bot && styles.botText]}>{props.first_name} {props.last_name}</Text>
        {!props.bot && <Text style={styles.text}>{props.last_message}</Text>}
      </View>
    </TouchableOpacity>
  );
};

export default UserCoversationCard;
