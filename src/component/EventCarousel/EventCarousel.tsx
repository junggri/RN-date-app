import React, {FC, memo} from 'react'
import {View, Text, ListRenderItem, ListRenderItemInfo, TouchableWithoutFeedback} from "react-native";
import {styles} from "./EventCarousel.styles";
import FontText from "../../Component-System/FontText/FontText";
import {useNavigation} from "@react-navigation/native"

interface Props {
  style: any
  data: ListRenderItemInfo<{ title: string, desc: string }>
}

const EventCarousel: FC<Props> = memo(({style, data}) => {
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback onPress={() => {
      navigation.navigate("RecordPage2")
    }}>
      <View style={[styles.container, style]}>
        <View style={styles.place}>
          <FontText size={23} weight={'bold'}>
            {data.item.title}
          </FontText>
        </View>
        <View style={styles.address}>
          <FontText size={"s"} weight={'bold'} style={{textAlign: 'right', color: 'rgba(0,0,0,0.6)'}}>
            데이트 날짜 : {data.item.desc}
          </FontText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
})

export default EventCarousel
