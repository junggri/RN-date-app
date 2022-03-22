import React, {FC, memo} from 'react'
import {StyleProp, Text, TextStyle, View, ViewStyle} from 'react-native'
import border from "../../libs/setBorder";

interface Props {
  children: any
  size: 's' | 'm' | 'l' | number
  weight: "lighter" | "light" | "bold" | "bolder"
  lan?: 'ko' | 'en'
  type?: 'main' | 'normal'
  style?: StyleProp<TextStyle>
  color?: string
  numberOfLine?: number
}

const FontText: FC<Props> = memo(({children, size, style, type = "normal", weight = "light", lan = "ko", numberOfLine = 2}) => {

  const setFontSize = () => {
    let fontSize: number = 0
    if (typeof size === "number") {
      fontSize = size
      return fontSize
    } else {
      fontSize = size === "s" ? 14 : size === "m" ? 16 : 18
      return fontSize
    }
  }

  const setFontFamily = (): string => {
    let font: string = 'NanumBarunGothicLight'

    switch (weight) {
      case "lighter":
        font = "NanumBarunGothicUltraLight"
        break
      case 'light':
        font = "NanumBarunGothicLight"
        break
      case 'bold':
        font = "NanumBarunGothic"
        break
      case 'bolder':
        font = "NanumBarunGothicBold"
        break
    }
    return font
  }

  return (
    // <View style={{flexDirection: "row"}}>
    <Text style={{
      // width: '100%',
      fontSize: setFontSize(),
      color: type === "main" ? "#0F3AD1" : "black",
      fontFamily: setFontFamily(),
      // flexShrink: 1,
      ...style,
    }}
          numberOfLines={numberOfLine}
    >
      {children}
    </Text>
    // </View>
  )
});

export default FontText
