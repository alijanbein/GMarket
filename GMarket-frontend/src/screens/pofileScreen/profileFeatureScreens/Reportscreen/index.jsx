import { View, Text } from "react-native";
import React, { useState } from "react";
import { styles } from "./style";
import InputForm from "../../../../components/inputForm";
import PassButton from "../../../../components/passButton";
import { numberRegex } from "../../../../contansts/spacing";
import { useSelector } from "react-redux";
import UseHttp from "../../../../hooks/http-hook";
import LoadingOverlay from "../../../../components/loadingOverlay";
import { useNavigation } from "@react-navigation/native";

const ReportScreen = () => {
  const auth = useSelector(state => state.auth)
  const [error,isLoading , sendRequest] = UseHttp();
  const navigator = useNavigation()
  const [data, setData] = useState({
    phone_number: "",
    message: "",
  });
  const [dataValid, setDataVAlid] = useState({
    phone_number: true,
    message: true,
  });

  const phoneNumberHandler = (text) => {
    setDataVAlid({
      phone_number: true,
      message: true,
    });
    setData({
      ...data,
      phone_number: text,
    });
  };
  const MessageHandler = (text) => {
    setDataVAlid({
      phone_number: true,
      message: true,
    });
    setData({
      ...data,
      message: text,
    });
  };

  const sendReport = async () => {
    let valid = true;
    if (data.message.length < 1) {
      setDataVAlid({ ...dataValid, message: false });
      valid = false;
    }
    if (data.phone_number.length != 11 || !numberRegex.test(data.phone_number)) {
      setDataVAlid({ ...dataValid, phone_number: false });
      valid = false;
    }
    if (valid) {
      const formData = new FormData();
      formData.append("phone_number",data.phone_number);
      formData.append("message",data.message);
      const response = await sendRequest("user/report_user","POST",formData, {
        authorization : "Bearer " + auth.token
      })

      if (response.status = "sucess") {
          navigator.navigate("Profile");
      }
      
      console.log("valid");
    }
  };
  return (
    <View style={styles.container}>
      <View>
        {isLoading && <LoadingOverlay/>}
        <InputForm
          keyboardType = "number-pad"
          value={data.phone_number}
          onTextChange={phoneNumberHandler}
          label="phone Number"
          placeHolder="phone Number"
          invalid={dataValid.phone_number}
        />
        <InputForm
          value={data.message}
          onTextChange={MessageHandler}
          label="Report message"
          placeHolder="message"
          bio
          invalid={dataValid.message}
        />
      </View>
      <PassButton active={true} title={"Report"} onPress={sendReport} />
    </View>
  );
};

export default ReportScreen;
//96179797979