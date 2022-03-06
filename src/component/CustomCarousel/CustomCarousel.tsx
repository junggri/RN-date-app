import React, {FC, ReactNode} from 'react'
import {FlatList, ListRenderItem, View} from "react-native";
import {RootStackParams} from "../../../App";

interface Props {
  data: any
  // renderItem: (item: ListRenderItem<any>) => void
  gap: number,
  offset: number
  pageWidth: number
  child: any
}


const CustomCarousel: FC<Props> = ({data, gap, pageWidth, offset, child}) => {
  const Child = child

  const renderItem = () => {
    return (
      <Child
        style={{width: pageWidth, marginHorizontal: gap / 2}}
      />
    )
  }

  return (}
    <View>
      <FlatList
        automaticallyAdjustContentInsets={false}
        contentContainerStyle={{paddingHorizontal: offset + gap / 2}}
        data={data}
        decelerationRate='fast'
        horizontal
        renderItem={renderItem}
        snapToInterval={pageWidth + gap}
        snapToAlignment="start"
        showsHorizontalScrollIndicator={false}
      />

    </View>
  )
}

export default CustomCarousel
