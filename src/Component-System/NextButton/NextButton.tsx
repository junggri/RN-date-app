import React, {FC, memo} from 'react'
import {StyleSheet, Text, TouchableWithoutFeedback, View} from "react-native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack/src/types";
import {RouteProp} from "@react-navigation/native";
import {styles} from "./NextButton.styles"

interface Props {
  route: RouteProp<any, any>;
  navigation: NativeStackNavigationProp<any, any>;
  style?: any
  to: string
  title?: string
}

const NextButton: FC<Props> = memo(({route, navigation, to, style, title = "다음"}) => {
  return (
    <TouchableWithoutFeedback onPress={() => {
      return (navigation as NativeStackNavigationProp<any, any>).navigate(to)
    }} style={{backgroundColor: "red"}}>
      <View style={[styles.container, {...style}]}>
        <View style={styles.button}>
          <Text style={{fontSize: 17, fontWeight: '600', color: "#0F3AD1"}}>{title}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
})


export default NextButton;



