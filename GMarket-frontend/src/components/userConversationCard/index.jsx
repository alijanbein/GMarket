import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { styles } from "./style";
import Avatar from "../Avatar";
import { width } from "deprecated-react-native-prop-types/DeprecatedImagePropType";

const UserCoversationCard = (props) => {
  return (
    <TouchableOpacity
      onPress={()=>{}}
      style={[styles.container, props.bot && styles.botContainer]}
    >
      <View style={{ width: 50, height: 50 }}>
        <Avatar uri="https://picsum.photos/id/1004/500/500" />
      </View>
      <View style={styles.info}>
        <Text style={[styles.name,props.bot && styles.botText]}>Ali Janbein</Text>
        {!props.bot && <Text style={styles.text}>Hello There!</Text>}
      </View>
    </TouchableOpacity>
  );
};

export default UserCoversationCard;
