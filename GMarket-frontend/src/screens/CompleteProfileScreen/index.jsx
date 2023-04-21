import { View, Text, Button, Image } from 'react-native'
import React, { useState } from 'react'
import { styles } from './style'
import * as ImagePicker from 'expo-image-picker';
const CompleteProfileScren= () => {
    const [imageURI,setImageUri] = useState('');
    let openImagePickerAsync = async () => {
      
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
        if (permissionResult.granted === false) {
          alert("Permission to access camera roll is required!");
          return;
        }
        
        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        if(!pickerResult.canceled){
            setImageUri(pickerResult.assets[0].uri)
            console.log(pickerResult.assets[0].uri);
        }
    }

    // // const sendHandler = async () => {
        
    //     let uriParts = imageURI.split('.');
    //         let fileType = uriParts[uriParts.length - 1];
    //         console.log(fileType);
    // // }

  return (
    <View style = {styles.container}>
      <Button title='test'  onPress={openImagePickerAsync}/>
      <Image style ={styles.image} source={{uri : imageURI}} />
    </View>
  )
}

export default CompleteProfileScren


// uri: result.uri,
// name: 'myImage.jpg',
// type: 'image/jpeg'