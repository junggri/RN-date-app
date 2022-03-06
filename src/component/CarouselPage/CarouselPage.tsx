import React, {FC, memo} from 'react'
import {View, Text, ListRenderItem, TouchableWithoutFeedback, ListRenderItemInfo} from "react-native";
import {styles} from "./CarouselPage.styles"
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParams} from "../../../App";
import {NativeStackNavigationProp} from "@react-navigation/native-stack/src/types";

interface Props {
  style: any
  page: ListRenderItemInfo<{ title: string, navigate: RootStackParams[keyof RootStackParams] }>
  navigation: NativeStackNavigationProp<RootStackParams, 'Register'>
}


const CarouselPage = memo(({style, page, navigation}: Props) => {

  return (
    <View style={{...style}}>
      <View style={styles.box}>
        <View style={styles.textBox}>
          <Text style={styles.text}>
            {page.item.title.split("")[0].toUpperCase()}
          </Text>
        </View>
        <TouchableWithoutFeedback onPress={() => {
          navigation.navigate(page.item.navigate)
        }}>
          <View style={styles.addButton}>
            <Text style={{
              fontWeight: "600",
              letterSpacing: 1.2,
              color: "white",
              fontSize: 20
            }}>
              {page.item.title.toUpperCase()}
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  )
})

export default CarouselPage
