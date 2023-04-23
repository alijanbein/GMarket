import { View, Text } from "react-native";
import React, { useState } from "react";
import { styles } from "./style";
import { useNavigation } from "@react-navigation/native";
import InputForm from "../../../../components/inputForm";
import PassButton from "../../../../components/passButton";

const EditProfileScreen = () => {
  const navigation = useNavigation();
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    type: "Farmer",
  });
  const [dataValid, setDataVAlid] = useState({
    first_name: true,
    last_name: true,
    email: true,
  });
  const [typeActive, setTypeActive] = useState(true);

  const typePressHandler = (type) => {
    setTypeActive(!typeActive);
    setData({ ...data, type: type });
  };
  const fnameHandler = (text) => {
    setDataVAlid({
      first_name: true,
      last_name: true,
      email: true,
    });
    setData({ ...data, first_name: text });
  };
  const lnameHandler = (text) => {
    setData({ ...data, last_name: text });
  };
  const emailHandler = (text) => {
    setData({ ...data, email: text });
  };

  const sendData = async () => {
    let valid = true;
    if (data.last_name.length < 1) {
      setDataVAlid({ ...dataValid, last_name: false });
      valid = false;
    }
    if (data.first_name.length < 1) {
      setDataVAlid({ ...dataValid, first_name: false });
      valid = false;
    }

    if (!emailRegex.test(data.email)) {
      valid = false;
      setDataVAlid({ ...dataValid, email: false });
    }
    if (valid) {
      navigation.navigate("Complete Profile Info");
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputs}>
        <InputForm
          value={data.first_name}
          onTextChange={fnameHandler}
          label="First name"
          placeHolder="fname"
          invalid={dataValid.first_name}
        />
        <InputForm
          value={data.last_name}
          onTextChange={lnameHandler}
          label="Last name"
          placeHolder="lname"
          invalid={dataValid.last_name}
        />
        <InputForm
          value={data.email}
          keyboardType="email-address"
          onTextChange={emailHandler}
          label="Email"
          placeHolder="email@gmail.com"
          invalid={dataValid.email}
        />
        <InputForm
          value="+961 70838043"
          keyboardType="email-address"
          onTextChange={emailHandler}
          label="Phone Number"
          placeHolder="phone"
          invalid={true}
          phone
        />
      </View>
      <PassButton title= "save" active= {true} />
    </View>
  );
};

export default EditProfileScreen;
