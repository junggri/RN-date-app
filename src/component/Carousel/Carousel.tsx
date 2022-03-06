import React, {FC, memo, useState} from 'react'
import {FlatList, ListRenderItem, NativeScrollEvent, TouchableWithoutFeedback, View} from "react-native";
import {Page} from "../../page/Register/Register";
import CarouselPage from "../CarouselPage/CarouselPage";
import {styles} from "./Carousel.styles"
import Indicator from "../Indicator/Indicator";
import {NativeStackNavigationProp} from "@react-navigation/native-stack/src/types";
import {RootStackParams} from "../../../App";

interface Props {
  gap: Page[]
  offset: number
  pages: any[]
  pageWidth: number
  navigation: NativeStackNavigationProp<RootStackParams, 'Register'>
}

const Carousel: FC<Props> = memo(({gap, offset, pages, pageWidth, navigation}) => {

  const [nowPage, setNowPage] = useState<number>(0);

  const renderItem = (item: ListRenderItem<{ title: string, navigation: RootStackParams[keyof RootStackParams] }>) => {

    return (
      <CarouselPage
        page={item}
        style={{width: pageWidth, marginHorizontal: gap / 2, height: '100%'}}
        navigation={navigation}
      />
    )
  }

  const onScroll = (e) => {
    setNowPage(e.nativeEvent.contentOffset.x / (pageWidth + gap));
  }

  return (
    <View style={styles.container}>
      <FlatList
        automaticallyAdjustContentInsets={false}
        contentContainerStyle={{paddingHorizontal: offset + gap / 2}}
        data={pages}
        decelerationRate='fast'
        horizontal
        renderItem={renderItem}
        snapToInterval={pageWidth + gap}
        snapToAlignment="start"
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
      />
      <Indicator now={nowPage} length={pages.length}/>
    </View>
  )
})

export default Carousel
