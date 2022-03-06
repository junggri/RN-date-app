import React, {FC, memo} from 'react'
import {Text} from 'react-native'

interface Props {
  children: any
  size: 's' | 'm' | 'l' | number
  weight: "lighter" | "light" | "bold" | "bolder"
  lan?: 'ko' | 'en'
  type?: 'main' | 'normal'
  style?: any
}

const FontText: FC<Props> = memo(({children, size, style, type = "normal", weight = "light", lan = "ko"}) => {

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
    <Text style={{
      fontSize: setFontSize(),
      color: type === "main" ? "#0F3AD1" : "black",
      fontFamily: setFontFamily(),
      ...style
    }}
          numberOfLines={2}
    >
      {children}
    </Text>
  )
});

export default FontText
