import { View, Text, Button } from 'react-native'
import React from 'react'
import { styles } from './style'
import * as ImagePicker from 'expo-image-picker';
const CompleteProfileScren= () => {
    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
        if (permissionResult.granted === false) {
          alert("Permission to access camera roll is required!");
          return;
        }
    
        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        if(!pickerResult.canceled){
            console.log(pickerResult.name);
        }
    }

  return (
    <View style = {styles.container}>
      <Button title='test'  onPress={openImagePickerAsync}/>
    </View>
  )
}

export default CompleteProfileScren


// uri: result.uri,
// name: 'myImage.jpg',
// type: 'image/jpeg'