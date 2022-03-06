import React, {FC, memo} from 'react'
import {Text, View} from "react-native";

interface Props {
  children: any
  type: "main",
  style: any,
  size: "s" | "m" | "l"
}

const MyText: FC<Props> = memo(({children, type = "normal", style, size = 's'}) => {

  return (
    <View style={{...style}}>
      <Text style={{
        color: type === "main" ? "#0F3AD1" : "black",
        fontSize: size === "s" ? 14 : size === "m" ? 16 : 18
      }}>{children}</Text>
    </View>
  )
})


export default MyText
