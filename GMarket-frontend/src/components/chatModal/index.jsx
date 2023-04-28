import { View, Text, TouchableHighlight, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./style";

const ChatModal = (props) => {
  return (
      <View style={styles.overlay}>
        <TouchableOpacity
          style={styles.bakcdrop}
          onPress={props.onCancel}
        ></TouchableOpacity>
        <View style={styles.container}>
          <Text>ChatModal</Text>
        </View>
      </View>
  );
};

export default ChatModal;
