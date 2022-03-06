import React, {Dispatch, FC, memo, SetStateAction} from 'react'
import {LayoutChangeEvent, View, Text} from "react-native";
import {styles} from "./Bottom.styles"

interface Props {
  setBottomHeight: Dispatch<SetStateAction<number>>
}


const Bottom: FC<Props> = memo(({setBottomHeight}) => {
  const onLayout = (e: LayoutChangeEvent) => {
    setBottomHeight(e.nativeEvent.layout.height)
  }
  return (
    <View style={styles.container} onLayout={onLayout}>
    </View>
  )
})
export default Bottom
