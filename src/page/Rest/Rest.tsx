import React, {memo} from "react"
import {SafeAreaView, View, Text, TouchableOpacity} from "react-native";
import Calender from "../../component/Calender/Calender";
import {styles} from "./Rest.styles"
import PageHeader from "../../component/PageHeader/PageHeader";
import FontText from "../../Component-System/FontText/FontText";

import {useNavigation} from '@react-navigation/native'

const Rest = memo(() => {
  const navigation = useNavigation()
  return (
    <View style={{backgroundColor: "white", flex: 1}}>
      <View>
        <PageHeader header={"REST"}/>
      </View>
      <View style={{marginTop: 60}}>
        <Calender/>
      </View>
      <View style={styles.buttonBox}>
        <TouchableOpacity onPress={() => {
          navigation.navigate("LastPage")
        }}>
          <View style={styles.button}>
            <FontText size={'l'} weight={'bold'}>
              저장하기
            </FontText>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
})

export default Rest
