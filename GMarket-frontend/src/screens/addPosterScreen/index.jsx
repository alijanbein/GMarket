import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import style from "./style";
import InputForm from "../../components/inputForm";
import { useNavigation } from "@react-navigation/native";
import { numberRegex } from "../../contansts/spacing";
import PassButton from "../../components/passButton";
import * as ImagePicker from "expo-image-picker";
import { useSelector } from "react-redux";
import UseHttp from "../../hooks/http-hook";
import LoadingOverlay from "../../components/loadingOverlay";

const AddPostScreen = () => {
  const auth = useSelector(state => state.auth);
  const [error,isLoading,sendRequest] = UseHttp();
  const navigation = useNavigation();
  const [data, setData] = useState({
    product_title: "",
    product_type: "",
    price: "",
    description: "",
    operation: "",
  });
  const [dataValid, setDataVAlid] = useState({
    product_title: true,
    product_type: true,
    price: true,
    description: true,
    operation: true,
  });
  const [imageURI, setImageUri] = useState("");

  const [typeActive, setTypeActive] = useState(true);

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

  const typePressHandler = (type) => {
    setTypeActive(!typeActive);
    setData({ ...data, type: type });
  };
  const productTitlehandler = (text) => {
    setDataVAlid({
      product_title: true,
      product_type: true,
      price: true,
      description: true,
      operation: true,
    });
    setData({ ...data, product_title: text });
  };
  const productTypehandler = (text) => {
    setDataVAlid({
      product_title: true,
      product_type: true,
      price: true,
      description: true,
      operation: true,
    });
    setData({ ...data, product_type: text });
  };
  const priceHandler = (text) => {
    setDataVAlid({
      product_title: true,
      price: true,
      description: true,
      operation: true,
    });
    setData({ ...data, price: text });
  };
  const descriptionHandler = (text) => {
    setDataVAlid({
      product_title: true,
      price: true,
      description: true,
      operation: true,
    });
    setData({ ...data, description: text });
  };
  const operationHandler = (text) => {
    setDataVAlid({
      product_title: true,
      price: true,
      description: true,
      operation: true,
    });
    setData({ ...data, operation: text });
  };

  const sendData = async () => {
    let valid = true;
    if (data.operation.length < 1) {
      setDataVAlid({ ...dataValid, operation: false });
      valid = false;
    }
    if (data.product_title.length < 1) {
      setDataVAlid({ ...dataValid, product_title: false });
      valid = false;
    }
    if (data.description.length < 1) {
      setDataVAlid({ ...dataValid, description: false });
      valid = false;
    }

    if (!numberRegex.test(data.price)) {
      valid = false;
      setDataVAlid({ ...dataValid, price: false });
    }
    if (valid) {
        const formData = new FormData();
        formData.append("title",data.product_title);
        formData.append("price",data.price);
        formData.append("description",data.description);
        formData.append("operation",data.operation);
        formData.append("poster_image",{
          uri:imageURI,
          type: "poster/jpeg",
          name:"poster"+auth.phoneNumber +"/jpeg"
        })
        const response = await sendRequest("posts/add_post","POST",formData,{
          authorization: "Bearer "+ auth.token
        })

        if(response.status == "sucess"){
            navigation.navigate("Home Screen")
        }
    }
  };
  return (
    <ScrollView contentContainerStyle={style.contentContainerStyle} style={style.container}>
    {isLoading && <LoadingOverlay/>}
      <TouchableOpacity onPress={openImagePickerAsync} style={style.imageContainer}>
        {!!imageURI && <Image style={style.image} source={{ uri: imageURI }} />}
        {!!!imageURI && <Text style={style.textImage}>+ Add Image</Text>}
      </TouchableOpacity>
      <InputForm
        value={data.product_title}
        onTextChange={productTitlehandler}
        label="Product Title"
        placeHolder="prouct title"
        invalid={dataValid.product_title}
      />
      <InputForm
        value={data.product_type}
        onTextChange={productTypehandler}
        label="Product type"
        placeHolder="product type"
        invalid={dataValid.product_type}
      />
      <InputForm
        value={data.price}
        onTextChange={priceHandler}
        label="Price"
        placeHolder="price"
        invalid={dataValid.price}
      />
      <InputForm
        value={data.description}
        onTextChange={descriptionHandler}
        label="Desction"
        placeHolder="write here"
        bio
        invalid={dataValid.description}
      />
      <InputForm
        value={data.operation}
        onTextChange={operationHandler}
        label="Operation"
        placeHolder="Operation"
        bio
        invalid={dataValid.operation}
      />
      <PassButton
        style={{ marginTop: 20 }}
        active={true}
        title="post"
        onPress={sendData}
      />
    </ScrollView>
  );
};

export default AddPostScreen;

