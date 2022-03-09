import React, {memo, useEffect, useRef, useState} from 'react';
import {
  Dimensions,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import {styles} from "./RecordPage3.styles";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RecordPageProps} from "../../page/Record/Record";
import PageHeader from "../PageHeader/PageHeader";
import FontText from "../../Component-System/FontText/FontText";


export type RecordScreenProps = NativeStackScreenProps<RecordPageProps, 'Record'>;
const RecordPage3 = memo(({route, navigation}: RecordScreenProps) => {
  const {height, width} = Dimensions.get("window");
  const [showAccessory, setShowAccessory] = useState<boolean>(false)
  const keyboardRef = useRef<TextInput | null>()
  const [value, setValue] = useState<string>("");

  const onPressDoneButton = () => {
    Keyboard.dismiss();
    setShowAccessory(false)
  }

  const onPressTextInputSection = () => {
    if (!keyboardRef.current) {
      return
    }
    (keyboardRef.current as TextInput).focus();

    if ((keyboardRef.current as TextInput).isFocused()) {
      setShowAccessory(true)
    }
  }

  const onChangeText = (text: string) => {
    setValue(text)
  }

  const onPressRegisterButton = () => {
    navigation.navigate("LastPage")
  }

  return (
    <View style={{flex: 1, backgroundColor: "white"}}>
      <PageHeader/>
      <KeyboardAvoidingView behavior={'padding'} style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.header}>
            <Text style={{fontSize: 16}}>
              메모하기
            </Text>
          </View>
          <TouchableOpacity onPress={onPressRegisterButton} style={styles.headerButtonContainer}>
            <FontText style={styles.headerButton} size={"m"} weight={'bold'}>
              등록하기
            </FontText>
          </TouchableOpacity>
        </View>
        <View style={styles.second}>
          <View style={styles.fakeBox}/>
          <TouchableWithoutFeedback onPress={onPressTextInputSection}>
            <View style={styles.textInputContainer}>
              <TextInput
                style={[styles.textInput, {width: width - 100}]}
                placeholder={"간단한 메모 남기기"}
                multiline
                value={value}
                onChangeText={onChangeText}
                ref={keyboardRef}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={[styles.inputAccessory, {display: showAccessory ? 'flex' : "none"}]}>
          <TouchableOpacity onPress={onPressDoneButton}>
            <View style={styles.accessoryButton}>
              <Text style={{fontSize: 19, fontWeight: '600', color: "#0F3AD1"}}>
                DONE
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  )
})

export default RecordPage3
