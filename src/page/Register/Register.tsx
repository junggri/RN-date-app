import React, {FC, memo, useEffect, useState} from 'react'
import {Dimensions, LayoutChangeEvent, SafeAreaView, Text, View} from "react-native";
import {createStackNavigator} from "@react-navigation/stack";
import {styles} from "./Register.styles"
import Header from "../../component/Header/Header";
import PageHeader from "../../component/PageHeader/PageHeader";
import PageTextButton from "../../Component-System/PageTextButton/PageTextButton";
import Carousel from "../../component/Carousel/Carousel";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParams} from "../../../App";


export type RegisterProps = {
  Page1: undefined,
  Page2: undefined,
  Page3: undefined
}

export interface Page {
  title: string
  navigate: RootStackParams[keyof RootStackParams]
}

export type RegisterScreenProps = NativeStackScreenProps<RootStackParams, 'Register'>;

const Register = memo(({navigation, route}: RegisterScreenProps) => {
  const {height, width} = Dimensions.get("window");
  const [headerH, setHeaderH] = useState<number>(0);
  const [gap, setGap] = useState(16)
  const [offset, setOffset] = useState(32)

  const onLayout = (e: LayoutChangeEvent) => {
    setHeaderH(e.nativeEvent.layout.height)
  }

  const pages = [
    {
      title: "Date",
      navigate: "Event"
    },
    {
      title: "place",
      navigate: "Place"
    },
    {
      title: "rest",
      navigate: "Rest"
    }
  ]


  return (
    <View style={styles.container}>
      <View onLayout={onLayout}>
        <PageHeader/>
      </View>
      <View style={[styles.body, {height: height - headerH}]}>
        <Carousel
          gap={gap}
          offset={offset}
          pages={pages}
          pageWidth={width - (gap + offset) * 2}
          navigation={navigation}
        />
      </View>
    </View>
  )
})


export default Register
