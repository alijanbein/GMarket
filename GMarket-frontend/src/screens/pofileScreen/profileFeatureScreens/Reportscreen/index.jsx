import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { styles } from './style'
import InputForm from '../../../../components/inputForm'

const ReportScreen = () => {
  const [data,setData] = useState({
    phone_number:"",
    message: ""
  })

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
  return (
    <View style ={styles.container}>
        <InputForm
          value={data.phone_number}
          onTextChange={phoneNumberHandler}
          label="phone Number"
          placeHolder="phone Number"
          // invalid={dataValid.first_name}
        />
        <InputForm
          value={data.message}
          onTextChange={MessageHandler}
          label="Report message"
          placeHolder="message"
          bio
          // invalid={dataValid.last_name}
        />
    </View>
  )
}

export default ReportScreen;