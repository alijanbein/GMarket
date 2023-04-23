import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { styles } from './style'
import InputForm from '../../../../components/inputForm'
import PassButton from '../../../../components/passButton'

const ReportScreen = () => {
  const [data,setData] = useState({
    phone_number:"",
    message: ""
  })
  const [dataValid, setDataVAlid] = useState({
    phone_number: true,
    message:true
  });

  const phoneNumberHandler = (text) =>{
    setData(
      {
        ...data,
        phone_number:text
      }
    )
  }
  const MessageHandler = (text) =>{
    setData(
      {
        ...data,
        message:text
      }
    )
  }

  const sendReport = async() => {
    let valid = true;
    if (data.message.length < 1) {
      setDataVAlid({ ...dataValid, message: false });
      valid = false;
    }
    if (data.phone_number.length != 11) {
      setDataVAlid({ ...dataValid, phone_number: false });
      valid = false;
    }
    if(valid){console.log("valid");}
  }
  return (
    <View style ={styles.container}>
        <View>
        <InputForm
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
        <PassButton active= {true} title={'Report'} onPress ={sendReport}  />
    </View>
  )
}

export default ReportScreen;