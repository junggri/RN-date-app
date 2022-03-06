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
  AsyncStorage
} from "react-native";
import PageHeader from "../../PageHeader/PageHeader";
import {styles} from "./EventPage3.styles";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {EventProps} from "../../../page/Event/Event";
import MyText from "../../../Component-System/MyText/MyText";


export type EventScreenProps = NativeStackScreenProps<EventProps, 'Event'>;
const EventPage3 = memo(({route, navigation}: EventScreenProps) => {
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
    navigation.navigate("Page4")
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
            <MyText style={styles.headerButton} size={"m"}>
              등록하기
            </MyText>
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
      {/*<TouchableWithoutFeedback onPress={() => {*/}
      {/*  console.log(123)*/}
      {/*}}>*/}
      {/*  <View style={styles.buttonBox}>*/}
      {/*    <Text style={{fontSize: 17, fontWeight: "600", color: "#0F3AD1"}}>등록하기</Text>*/}
      {/*  </View>*/}
      {/*</TouchableWithoutFeedback>*/}
    </View>
  )
})

export default EventPage3
