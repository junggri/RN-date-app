import React, {memo} from 'react'
import {SafeAreaView, View} from "react-native";
import {styles} from "./User.styles"
import FontText from "../../Component-System/FontText/FontText";

interface Props {
}

const User = memo(() => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <FontText size={20} weight={"bold"}>
          HEYLO
        </FontText>
        <FontText size={20} weight={'bold'}>
          은영
        </FontText>
      </View>
      <View style={styles.body}>

      </View>
    </SafeAreaView>
  )
})

export default User
