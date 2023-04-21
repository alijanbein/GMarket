import { View, Text, Button, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { styles } from "./style";
import { AntDesign } from "@expo/vector-icons";

import * as ImagePicker from "expo-image-picker";
import { COLORS } from "../../contansts/colors";
import InputForm from "../../components/inputForm";
import PassButton from "../../components/passButton";
const CompleteProfileScren = () => {
  const [imageURI, setImageUri] = useState("");
  const [bio,setBio] = useState();
  let openImagePickerAsync = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (!pickerResult.canceled) {
      setImageUri(pickerResult.assets[0].uri);
      console.log(pickerResult.assets[0].uri);
    }
  };

    const 

  // // const sendHandler = async () => {

  //     let uriParts = imageURI.split('.');
  //         let fileType = uriParts[uriParts.length - 1];
  //         console.log(fileType);
  // // }

  return (
    <View style={styles.container}>
      <View style = {{width: "100%"}}>
        <Image
          style={styles.image}
          source={{
            uri: `${
              !!imageURI
                ? imageURI
                : "https://www.w3schools.com/howto/img_avatar.png"
            }`,
          }}
        />
        <TouchableOpacity style={styles.button} onPress={openImagePickerAsync}>
          <AntDesign name="plus" size={24} color={COLORS.white} />
          <Text style={styles.buttonText}>Upload Image</Text>
        </TouchableOpacity>
        <View>
          <InputForm onChangeText ={bioHandler}  label="Bio" bio invalid={true} />
        </View>
      </View>
      <View style={{ width: "100%" }}>
        <PassButton acitve={true} title={"skip"} />
        <Text></Text>
        <PassButton acitve={false} title="finish" />
      </View>
    </View>
  );
};

export default CompleteProfileScren;

// uri: result.uri,
// name: 'myImage.jpg',
// type: 'image/jpeg'
