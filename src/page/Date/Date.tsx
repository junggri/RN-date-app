import React, {memo} from 'react'
import {SafeAreaView, Text, View} from "react-native";
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParams} from "../../../App";
import {NativeStackScreenProps} from "@react-navigation/native-stack";

type HomeScreenProps = NativeStackScreenProps<RootStackParams, 'Date'>;

const Date = memo(({route, navigation}: HomeScreenProps) => {

  console.log(route.key)
  const handleONProps = () => {
  }

  return (
    <SafeAreaView>
      <Text>as</Text>
    </SafeAreaView>
  )
})

export default Date
