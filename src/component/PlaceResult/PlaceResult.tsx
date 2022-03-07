import React, {memo} from 'react'
import {View} from "react-native";
import {styles} from "./PlaceResult.styles"
import FontText from "../../Component-System/FontText/FontText";

const PlaceResult = memo(() => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <FontText size={26} weight={"bold"}>
            이 곳이 맞나요?
          </FontText>
        </View>
        <View style={{marginTop: 5}}>
          <FontText size={20} weight={"bold"}>
            검색결과
          </FontText>
        </View>
      </View>
    </View>
  )
})

export default PlaceResult
