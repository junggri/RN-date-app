import React, {FC, memo} from 'react'
import {View, Text, Image} from "react-native";
import {EventStyle} from "../Event/Event.styles";


interface Props {
}

const PastEvent: FC<Props> = memo(() => {
  return (
    <View style={EventStyle.pastEventItem}>
      <View>
        <Image source={require("../../public/images/ey.jpg")} style={EventStyle.pastImg}/>
      </View>
      <View>
        <Text>여기다녀옴</Text>
        <Text style={{fontSize: 12, marginTop: 4}}>2022-05-02</Text>
      </View>
    </View>
  )
})

export default PastEvent
