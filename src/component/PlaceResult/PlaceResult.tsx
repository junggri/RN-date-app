import React, {FC, memo} from 'react'
import {Text, TouchableHighlight, View} from "react-native";
import {styles} from "./PlaceResult.styles"
import FontText from "../../Component-System/FontText/FontText";
import NaverMap from "../Map/Map";
import {Address} from "../../core/type";

interface Props {
  coordinate: {
    latitude: number,
    longitude: number
  }
  place: Address | null
}

const PlaceResult: FC<Props> = memo(({coordinate, place}) => {

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.textHeader}>
          <FontText size={20} weight={"bold"} style={{color: "white"}}>
            검색결과
          </FontText>
        </View>
      </View>
      <View style={styles.result}>
        <FontText size={26} weight={"bold"}>
          {place?.buildingName}
        </FontText>
        <FontText size={20} weight={"bold"} style={{marginTop: 5, color: "rgba(0,0,0,0.6)"}}>
          {place?.roadAddress}
        </FontText>
      </View>
      <View style={styles.map}>
        <NaverMap coordinate={coordinate} height={350}/>
      </View>
    </View>
  )
})

export default PlaceResult
