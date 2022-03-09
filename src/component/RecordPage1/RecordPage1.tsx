import React, {memo, useState} from 'react'
import {Dimensions, ScrollView, View} from "react-native";
import {styles} from "./RecordPage1.styles"
import PageHeader from "../../component/PageHeader/PageHeader";
import FontText from "../../Component-System/FontText/FontText";
import CustomCarousel from "../../component/CustomCarousel/CustomCarousel";
import EventCarousel from "../../component/EventCarousel/EventCarousel";
import PastEventItem from "../../component/PastEventItem/PastEventItem";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParams} from "../../../App";

interface PageProps {
  RecordPage1: undefined,
  RecordPage2: undefined
}


const RecordPage1 = memo(() => {
  const {height, width} = Dimensions.get("window")
  const [gap, setGap] = useState(10)
  const [offset, setOffset] = useState(12)

  const [gap2, setGap2] = useState(8)
  const [offset2, setOffset2] = useState(12)


  const data = [
    {
      title: '현대백화점1',
      desc: "2022.02.02"
    },
    {
      title: '현대백화점2',
      desc: "2022.02.02"
    },
    {
      title: '현대백화점3',
      desc: "2022.02.02"
    },
    {
      title: '현대백화점4',
      desc: "2022.02.02"
    },
    {
      title: '현대백화점5',
      desc: "2022.02.02"
    },
    {
      title: '현대백화점6',
      desc: "2022.02.02"
    },
    {
      title: '현대백화점7',
      desc: "2022.02.02"
    }
  ]

  return (
    <View style={{backgroundColor: "white", flex: 1}}>
      <View>
        <PageHeader header={"RECORD"}/>
      </View>
      <View style={styles.scrollView}>
        <FontText size={"l"} weight={'bold'} style={{fontWeight: "800", marginLeft: 20}}>
          기록남기기
        </FontText>
        <View style={styles.carousel}>
          <CustomCarousel
            data={data}
            gap={gap}
            offset={offset}
            pageWidth={width - (gap + offset) * 2}
            child={EventCarousel}
          />
        </View>
        <View style={styles.pastEvent}>
          <View style={{display: "flex", flexWrap: "wrap", paddingLeft: 20}}>
            <FontText size={"l"} weight={'bold'} style={{fontWeight: "800"}}>
              지난 기록
            </FontText>
          </View>
          <View style={styles.carousel}>
            <CustomCarousel
              data={data}
              gap={gap2}
              offset={offset2}
              pageWidth={width - (gap2 + offset2) * 2}
              child={PastEventItem}
              perPage={4}
            />
          </View>
        </View>
      </View>
    </View>
  )
})

export default RecordPage1


