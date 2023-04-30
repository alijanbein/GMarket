import { View, Text, ScrollView, Image, TouchableOpacity, Switch } from "react-native";
import React, { useEffect, useState } from "react";
import style from "./style";
import InputForm from "../../components/inputForm";
import { useNavigation } from "@react-navigation/native";
import { numberRegex } from "../../contansts/spacing";
import PassButton from "../../components/passButton";
import * as ImagePicker from "expo-image-picker";
import { useSelector } from "react-redux";
import UseHttp from "../../hooks/http-hook";
import LoadingOverlay from "../../components/loadingOverlay";
import { COLORS } from "../../contansts/colors";

const AddPostScreen = () => {
  const auth = useSelector((state) => state.auth);
  const [error, isLoading, sendRequest] = UseHttp();
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
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
      product_type: true,
      price: true,
      description: true,
      operation: true,
    });
    setData({ ...data, price: text });
  };
  const descriptionHandler = (text) => {
    setDataVAlid({
      product_title: true,
      product_type: true,
      price: true,
      description: true,
      operation: true,
    });
    setData({ ...data, description: text });
  };
  const operationHandler = (text) => {
    setDataVAlid({
      product_title: true,
      product_type: true,
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
    if (data.product_type.length < 1) {
      setDataVAlid({ ...dataValid, product_type: false });
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
      formData.append("title", data.product_title);
      formData.append("product_type", data.product_type);
      formData.append("description", data.description);
      formData.append("operation", data.operation);
      formData.append("poster_image", {
        uri: imageURI,
        type: "image/jpeg",
        name: "poster" + auth.phoneNumber + "/jpeg",
      });
      const response = await sendRequest("posts/add_post", "POST", formData, {
        authorization: "Bearer " + auth.token,
      });
      console.log(response);
      if (response.status == "sucess") {
        if(isSwitchOn){
          const formData = new FormData();
          formData.append("posterId",response.poster._id,);
          formData.append("startingBid",data.price)
          const auction = await sendRequest("auction/register_to_auction","POST",formData,{
            authorization:"Bearer " +auth.token
          })
          console.log(auction);
        }
        setData({
          product_title: "",
          product_type: "",
          price: "",
          description: "",
          operation: "",
        })
        navigation.navigate("Home");
      }
    }
  };
  return (
    <ScrollView
      contentContainerStyle={style.contentContainerStyle}
      style={style.container}
    >
      {isLoading && <LoadingOverlay />}
      <TouchableOpacity
        onPress={openImagePickerAsync}
        style={style.imageContainer}
      >
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
          <View style={style.auction}>
          <Switch
        trackColor={{ false: "#767577", true: COLORS.main }}
        thumbColor={isSwitchOn ? COLORS.main : "#f4f3f4"}
        onValueChange={setIsSwitchOn}
        value={isSwitchOn}
        style={style.switch}
      />

      <Text style={style.auction_text}>{isSwitchOn?"Auction Enabled":"Enable Auction"}</Text>
          </View>
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
