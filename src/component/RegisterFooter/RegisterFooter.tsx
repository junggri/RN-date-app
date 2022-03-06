import React, {FC, memo} from 'react'
import {LayoutChangeEvent, Text, TouchableOpacity, View} from 'react-native'
import {styles} from "./RegisterFooter.styles"
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RegisterProps} from "../../page/Register/Register";

interface Props {
  prev?: keyof RegisterProps
  next?: keyof RegisterProps
  handleLayout?: (e: LayoutChangeEvent) => void
}


type RegisterScreenProps =
  NativeStackScreenProps<RegisterProps, 'Page1'> |
  NativeStackScreenProps<RegisterProps, 'Page2'>

const RegisterFooter: FC<Props & RegisterScreenProps> = memo(({route, navigation, next, prev, handleLayout}) => {
  return (
    <View style={[styles.container, {
      justifyContent: !prev ? "flex-end" : "space-between"
    }]} onLayout={handleLayout}
    >
      {prev &&
      <TouchableOpacity onPress={() => {
        navigation.navigate(prev)
      }}>
         <View style={styles.button}>
            <Text>이전</Text>
         </View>
      </TouchableOpacity>
      }
      {next &&
      <TouchableOpacity onPress={() => {
        navigation.navigate(next)
      }}>
         <View style={styles.button}>
            <Text>다음</Text>
         </View>
      </TouchableOpacity>
      }
    </View>
  )
})

export default RegisterFooter
