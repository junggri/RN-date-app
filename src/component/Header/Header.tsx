import React, {Dispatch, FC, memo, SetStateAction} from 'react'
import {View, Text, ScrollView, Image, LayoutChangeEvent} from "react-native";
import {styles} from "./Header.styles"
import FontText from "../../Component-System/FontText/FontText";

interface Props {
  setHeaderHeight: Dispatch<SetStateAction<number>>
}

const Header: FC<Props> = memo(({setHeaderHeight}) => {
  const onLayout = (e: LayoutChangeEvent) => {
    setHeaderHeight(e.nativeEvent.layout.height)
  }

  return (
    <View style={styles.container} onLayout={onLayout}>
      <View style={styles.left}>
        <FontText size={"l"} weight={"bold"} style={styles.user}>
          "은영"
        </FontText>
      </View>
      <View style={styles.right}>
        {/*<Text>asd</Text>*/}
      </View>
      <Text style={styles.rotate}>"HEYLO"</Text>
    </View>
  )
})
export default Header
