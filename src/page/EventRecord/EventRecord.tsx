import React, {memo} from 'react'
import {SafeAreaView, View, Text, ScrollView} from "react-native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParams} from "../../../App";
import {styles} from "./EventRecord.styles"

type RecordScreenProps = NativeStackScreenProps<RootStackParams, 'EventRecord'>;

const EventRecord = memo(({route, navigation}: RecordScreenProps) => {
  console.log(route)
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={styles.container}>
        <View style={{padding: 20}}>
          <Text style={{fontSize: 20, fontWeight: "600",}}>데이트 기록하기</Text>
        </View>
        <View style={styles.placeBox}>
          <Text>현대백화점</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
})

export default EventRecord
