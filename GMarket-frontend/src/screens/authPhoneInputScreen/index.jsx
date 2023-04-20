import { View, Text, TextInput } from "react-native";
import React from "react";
import styles from "./styles";

const AuthPhoneInputScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        <Text style={styles.span}>Green</Text> Market
      </Text>
      <View style={styles.phone_input}>
        <View style={styles.phone}>
          <Text style={styles.label}>961</Text>
        </View>
        <TextInput style={styles.phone} placeholder="alinj sama" />
      </View>
      <View>
        <Text>961</Text>
      </View>
    </View>
  );
};

export default AuthPhoneInputScreen;
