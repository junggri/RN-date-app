import React, {Dispatch, FC, memo, SetStateAction} from 'react'
import {LayoutChangeEvent, View, Text, TouchableWithoutFeedback} from "react-native";
import {styles} from "./Bottom.styles"
import {useNavigation} from "@react-navigation/native";
import useGetDateCount from "../../hooks/useGetDateCount";

interface Props {
  setBottomHeight: Dispatch<SetStateAction<number>>
}


const Bottom: FC<Props> = memo(({setBottomHeight}) => {
  const navigation = useNavigation();
  const date = useGetDateCount()

  const onLayout = (e: LayoutChangeEvent) => {
    setBottomHeight(e.nativeEvent.layout.height)
  }


  return (
    <View style={styles.container} onLayout={onLayout}>
      <View style={styles.button}>
        {/*<Home width={22} height={22}/>*/}
        <Text style={{fontSize: 15, fontWeight: "600", letterSpacing: 1.2}}>GrowUp</Text>
      </View>
      <View style={styles.button}>
        {/*<FontText size={20} weight={'bold'} style={{fontWeight: "900"} as any} type={"main"}>*/}
        {/*  {date}*/}
        {/*</FontText>*/}
      </View>
      <View style={styles.button}>
        {/*<FontText size={18} weight={'bold'} style={{fontWeight: "900", letterSpacing: 1.2} as any}>*/}
        <Text style={{fontSize: 15, fontWeight: "600", letterSpacing: 1.2}}>D-{date}</Text>
        {/*</FontText>*/}
      </View>
    </View>
  )
})
export default Bottom
