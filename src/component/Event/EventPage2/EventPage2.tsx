import React, {useState} from 'react'
import {
  Dimensions,
  KeyboardAvoidingView,
  LayoutChangeEvent,
  ScrollView,
  Keyboard,
  Text,
  TextInput,
  View, InputAccessoryView, Button, SafeAreaView
} from "react-native";
import Calender from "../../Calender/Calender";
import PageHeader from "../../PageHeader/PageHeader";
import {styles} from "./EventPage2.styles"
import NextButton from "../../../Component-System/NextButton/NextButton";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {EventProps} from "../../../page/Event/Event";

export type EventScreenProps = NativeStackScreenProps<EventProps, 'Event'>;

const EventPage2 = ({route, navigation}: EventScreenProps) => {
  const [height, setHeight] = useState<number>(0);


  const onLayout = (e: LayoutChangeEvent) => {
    setHeight(e.nativeEvent.layout.height)
  }

  return (
    <View style={{flex: 1, display: "flex", backgroundColor: "white"}}>
      <View onLayout={onLayout}>
        <PageHeader canGoBack={true}/>
      </View>
      <SafeAreaView style={styles.calender}>
        <Calender/>
        <NextButton route={route} navigation={navigation} to={"Page3"}/>
      </SafeAreaView>
    </View>
  )
}

export default EventPage2
