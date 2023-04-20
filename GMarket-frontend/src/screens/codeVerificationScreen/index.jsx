import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useRef, useState } from "react";
import { styles } from "./style";
import { useSelector } from "react-redux";

const CodeVerificationScreen = () => {
  const auth = useSelector((state) => state.auth);
  const input1Ref = useRef();
  const input2Ref = useRef();
  const input3Ref = useRef();
  const input4Ref = useRef();
  const inputs = [input1Ref, input2Ref, input3Ref, input4Ref];
  const [code, setCode] = useState(["", "", "", ""]);

  const handleKeyPress = (index, event) => {
    console.log("code:", code);
    if (event.nativeEvent.key === "Backspace" && index > 0) {
      inputs[index - 1].current?.focus();
      setCode((prev) => (prev[index] = ""));
      const newCode = [...code];
      newCode[index] = "";
      setCode(newCode);
    } else if (
      event.nativeEvent.key !== "Backspace" &&
      index < inputs.length - 1
    ) {
      inputs[index + 1].current?.focus();
      console.log("index", index);
      const newCode = [...code];
      newCode[index] = event.nativeEvent.key;
      setCode(newCode);
    } else if (
      event.nativeEvent.key !== "Backspace" &&
      index == inputs.length - 1
    ) {
      const newCode = [...code];
      newCode[index] = event.nativeEvent.key;
      setCode(newCode);
    } else if (event.nativeEvent.key === "Backspace" && index == 0) {
      const newCode = [...code];
      newCode[index] = "";
      setCode(newCode);
    }
  };
  console.log("code:", code);
  return (
    <View style={styles.container}>
      <Text
        style={styles.title}
      >{`Enter the code send to +961 ${auth.phoneNumber}`}</Text>
      <View style={styles.inputContainer}>
        {code.map((data, index) => (
          <TextInput
            key={index}
            style={styles.box}
            maxLength={1}
            keyboardType="numeric"
            ref={inputs[index]}
            onKeyPress={(e) => {
              handleKeyPress(index, e);
            }}
            value={data}
          />
        ))}

        {/* <TextInput
          style={styles.box}
          maxLength={1}
          keyboardType="numeric"
          ref={input2Ref}
          onKeyPress={(e) => {
            handleKeyPress(1, e);
          }}
          value={code[1]}
        />
        <TextInput
          style={styles.box}
          maxLength={1}
          keyboardType="numeric"
          ref={input3Ref}
          onKeyPress={(e) => {
            handleKeyPress(2, e);
          }}
          value={code[2]}
        />
        <TextInput
          style={styles.box}
          maxLength={1}
          keyboardType="numeric"
          ref={input4Ref}
          onKeyPress={(e) => {
            handleKeyPress(3, e);
          }}
          value={code[3]}
        /> */}
      </View>
    </View>
  );
};

export default CodeVerificationScreen;
