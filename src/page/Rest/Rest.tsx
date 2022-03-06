import React, {memo} from "react"
import {SafeAreaView, View, Text, TouchableOpacity} from "react-native";
import Calender from "../../component/Calender/Calender";
import {styles} from "./Rest.styles"

const Rest = memo(() => {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={{
          color: '#0F3AD1',
          fontSize: 20,
          fontWeight: 'bold'
        }}>언제 쉬고 싶어유?</Text>
      </View>
      <View>
        <Calender/>
      </View>
      <View style={styles.buttonBox}>
        <TouchableOpacity>
          <View style={styles.button}>
            <Text style={{color: "white", letterSpacing: 1.2}}>저장하기</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
})

export default Rest
