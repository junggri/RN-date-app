import React, {memo, useMemo} from 'react'
import {SafeAreaView, Text, View} from "react-native";
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParams} from "../../../App";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {DateStyle} from "./Date.styles";

type HomeScreenProps = NativeStackScreenProps<RootStackParams, 'Event'>;

const Event = memo(({route, navigation}: HomeScreenProps) => {

  console.log(route)
  const handleONProps = () => {
  }

  const renderEventItem = useMemo(() => {

    return new Array(10).fill(0).map((e, i) => {
      return (
        <View style={DateStyle.eventItem} key={i}>
          <View>
            <Text>여기 가는걸로 합시다</Text>
            {/*<Text>2022-02-02</Text>*/}
          </View>
          <View>
            <Text>-2</Text>
          </View>
        </View>
      )
    })
  }, [])

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={DateStyle.container}>
        <View style={DateStyle.header}>
          <Text style={{fontSize: 20}}>이벤트</Text>
        </View>
        <View style={DateStyle.eventContainer}>
          {renderEventItem}
        </View>
      </View>
    </SafeAreaView>
  )
})

export default Event
