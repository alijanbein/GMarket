import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useEffect, useRef, useState } from "react";
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
  const [focus, setFocus] = useState([false, false, false, false]);
  useEffect(() => {
    let finished = true;
    code.map((num) => {
      if (num == "") {
        finished = false;
      }
    });
    if (finished) {
      setCode(["", "", "", ""]);
      inputs[0].current.focus();

    }
  }, [code]);

  const onFocusHandler = (index) => {
    const newFocus = focus;
    focus[index] = true;
    setFocus(newFocus);
  };

  const onLoseFocusHandler = (index) => {
    const newFocus = focus;
    focus[index] = false;
    setFocus(newFocus);
  };

  const handleKeyPress = (index, event) => {
    if (event.nativeEvent.key === "Backspace" && index > 0) {
      inputs[index - 1].current?.focus();
      onLoseFocusHandler(index)
      onFocusHandler(index - 1);
      setCode((prev) => (prev[index] = ""));
      const newCode = [...code];
      newCode[index] = "";
      setCode(newCode);
    } else if (
      event.nativeEvent.key !== "Backspace" &&
      index < inputs.length - 1
    ) {
      inputs[index + 1].current?.focus();
      const newCode = [...code];
      newCode[index] = event.nativeEvent.key;
      setCode(newCode);
      onLoseFocusHandler(index)
      onFocusHandler(index + 1);
    } else if (
      event.nativeEvent.key !== "Backspace" &&
      index == inputs.length - 1
    ) {
      const newCode = [...code];
      newCode[index] = event.nativeEvent.key;
      setCode(newCode);
      onLoseFocusHandler(index)

    } else if (event.nativeEvent.key === "Backspace" && index == 0) {
      const newCode = [...code];
      newCode[index] = "";
      setCode(newCode);
      onLoseFocusHandler(index)

    }
  };

  return (
    <View style={styles.container}>
      <Text
        style={styles.title}
      >{`Enter the code send to +961 ${auth.phoneNumber}`}</Text>
      <View style={styles.inputContainer}>
        {code.map((data, index) => (
          <TextInput
            onBlur={() => {
              onLoseFocusHandler(index);
            }}
            caretHidden={true}
            key={index}
            style={[styles.box, focus[index] && styles.focus]}
            maxLength={1}
            keyboardType="numeric"
            ref={inputs[index]}
            onKeyPress={(e) => {
              handleKeyPress(index, e);
            }}
            value={data}
          />
        ))}
      </View>
    </View>
  );
};

export default CodeVerificationScreen;
