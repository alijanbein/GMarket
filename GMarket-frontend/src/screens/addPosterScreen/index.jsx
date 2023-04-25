import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import style from './style'
import InputForm from '../../components/inputForm'
import { useNavigation } from '@react-navigation/native'
import { numberRegex } from '../../contansts/spacing'
import PassButton from '../../components/passButton'

const AddPostScreen = () => {

    const navigation = useNavigation();
  const [data, setData] = useState({
    product_title: "",
    price: "",
    description: "",
    operation:""
  });
  const [dataValid, setDataVAlid] = useState({
    product_title: true,
    price: true,
    description: true,
    operation:true
  });
  const [typeActive, setTypeActive] = useState(true);

  const typePressHandler = (type) => {
    setTypeActive(!typeActive);
    setData({ ...data, type: type });
  };
  const productTitlehandler = (text) => {
    setDataVAlid({
        product_title: true,
        price: true,
        description: true,
        operation: true,
    });
    setData({ ...data, product_title: text });
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
        console.log("haa");
    }
  };
  console.log(dataValid);
  return (
    <ScrollView style = {style.container}>
     <InputForm
          value={data.product_title}
          onTextChange={productTitlehandler}
          label="Product Title"
          placeHolder="fname"
          invalid={dataValid.product_title}
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
        <PassButton style ={{marginTop:20}} active = {true} title = "post" onPress = {sendData}/>
    </ScrollView>
  )
}

export default AddPostScreen