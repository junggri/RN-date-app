import React, {FC, memo, useMemo} from 'react'
import {Image, ListRenderItem, ListRenderItemInfo, View} from "react-native";
import {styles} from "./PastEventItem.styles"
import FontText from "../../Component-System/FontText/FontText";

interface Props {
  style: any,
  data: ListRenderItemInfo<{ title: string, desc: string }[]>
}

const PastEventItem: FC<Props> = memo(({style, data}) => {

  const renderData = useMemo(() => {
    return data.item.map((e) => {
      return (
        <View key={e.title} style={styles.pastEventItem}>
          <View style={{display: 'flex', flex: 1, justifyContent: "space-between"}}>
            <View>
              <FontText size={21} weight={"bold"} numberOfLine={1}>
                오늘은 여기 다녀왔엉
              </FontText>
              <FontText size={14} weight={"bold"} numberOfLine={1} style={{marginTop: 3, color: 'rgba(0,0,0,0.5)'}}>
                여기서 우리는 야익어마ㅓ나
              </FontText>
            </View>
            <View>
              <FontText size={13} weight={"bold"} numberOfLine={1} style={{marginTop: 3, color: 'rgba(0,0,0,0.5)'}}>
                2022.02.01
              </FontText>
            </View>
          </View>
          <View style={styles.image}>
            <Image source={require("../../public/images/ey.jpg")} style={{width: '100%', height: "100%"}}/>
          </View>
        </View>
      )
    })
  }, [data])

  return (
    <View style={style}>
      {renderData}
    </View>
  )
})

export default PastEventItem
