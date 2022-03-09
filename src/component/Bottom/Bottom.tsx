import React, {Dispatch, FC, memo, SetStateAction} from 'react'
import {LayoutChangeEvent, View, Text, TouchableWithoutFeedback} from "react-native";
import {styles} from "./Bottom.styles"
import {useNavigation} from "@react-navigation/native";
import FontText from "../../Component-System/FontText/FontText";

interface Props {
  setBottomHeight: Dispatch<SetStateAction<number>>
}


const Bottom: FC<Props> = memo(({setBottomHeight}) => {
  const navigation = useNavigation();

  const onLayout = (e: LayoutChangeEvent) => {
    setBottomHeight(e.nativeEvent.layout.height)
  }


  return (
    <View style={styles.container} onLayout={onLayout}>
      <TouchableWithoutFeedback onPress={() => {
        navigation.navigate("Home")
      }}>
        <View style={styles.button}>
          <FontText size={25} weight={'bold'}>
            H
          </FontText>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <View style={styles.button}>
          <FontText size={30} weight={'bold'}>
            90
          </FontText>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <View style={styles.button}>
          <FontText size={25} weight={'bold'}>
            U
          </FontText>
        </View>
      </TouchableWithoutFeedback>
    </View>
  )
})
export default Bottom
