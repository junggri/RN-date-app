import React, {FC, ReactNode, useEffect, useState} from 'react'
import {FlatList, ListRenderItem, ListRenderItemInfo, View} from "react-native";
import {RootStackParams} from "../../../App";
import border from "../../libs/setBorder";

interface Props {
  data: any
  gap: number,
  offset: number
  pageWidth: number
  child: any
  perPage?: number
}


const CustomCarousel: FC<Props> = ({data, gap, pageWidth, offset, child, perPage}) => {
  const Child = child
  const [perPageData, setPerPageData] = useState<ListRenderItemInfo<any>[] | ListRenderItem<any>>([])


  useEffect(() => {
    if (!perPage) {
      return
    }

    const multiple = Math.floor(data.length / perPage);
    let array = []
    let depthArray = []

    data.forEach((e, i) => {
      if (i >= perPage * multiple) {
        depthArray.push(e)
        if (i === data.length - 1) {
          array.push(depthArray)
        }
      } else {
        depthArray.push(e)
        if (i % perPage === perPage - 1) {
          array.push(depthArray)
          depthArray = []
        }
      }
    })

    setPerPageData(array)
  }, [data])


  const renderItem = (data: ListRenderItem<any>) => {

    return (
      <Child
        style={{width: pageWidth, marginHorizontal: gap / 2}}
        data={data}
      />
    )
  }

  return (
    <View>
      <FlatList
        automaticallyAdjustContentInsets={false}
        contentContainerStyle={{paddingHorizontal: offset + gap / 2}}
        // contentContainerStyle={{paddingLeft: 20}}
        data={perPage ? perPageData : data}
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
