//main Color #0F3AD1
import React, {memo, useMemo, useState} from 'react'
import {
  Button,
  Dimensions,
  Image,
  ImageBackground,
  LayoutChangeEvent,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text, TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native'
import useGetDateCount from "../../hooks/useGetDateCount";
import Arrow from "../../public/images/arrow.svg"
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from "../../../App";
import {styles} from "./Home.Style"
import Header from "../../component/Header/Header";
import Bottom from "../../component/Bottom/Bottom";
import FontText from "../../Component-System/FontText/FontText";

const {height, width} = Dimensions.get('window')

export type HomeScreenProps = NativeStackScreenProps<RootStackParams, 'Home'>;


const Home = memo(({navigation, route}: HomeScreenProps) => {
  const date = useGetDateCount();
  const [recordTextWidth, setRecordTextWidth] = useState<number>(0);
  const [bottomHeight, setBottomHeight] = useState<number>(0)
  const [headerHeight, setHeaderHeight] = useState<number>(0)

  const onPressEvent = () => {
    // navigation.push({key: "init", name: "Date"})
  }

  const onLayOut = (e: LayoutChangeEvent) => {
    setRecordTextWidth(e.nativeEvent.layout.width)
  }

  const layoutHeader = (e: LayoutChangeEvent) => {
    setBottomHeight(e.nativeEvent.layout.height)
  }

  const onPressRegister = () => {
    navigation.navigate("Register" as RootStackParams[Register])
  }

  const onPressPicture = () => {
    navigation.navigate("Picture" as RootStackParams[Picture])
  }

  const onPressHistory = () => {
    navigation.navigate("Record" as RootStackParams[Rocord])
  }
  return (
    <View style={styles.home}>
      <Header setHeaderHeight={setHeaderHeight}/>
      <TouchableWithoutFeedback onPress={onPressRegister}>
        <View style={[styles.event, {height: (height - bottomHeight - headerHeight) / 3}]}>
          <View style={styles.textBox}>
            <Text style={styles.text}>"REGISTER"</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={onPressPicture}>
        <View style={[styles.register, {height: (height - bottomHeight - headerHeight) / 3}]}>
          <View style={styles.textBox}>
            <Text style={styles.text}>"PICTURE"</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={onPressHistory}>
        <View style={[, {height: (height - bottomHeight - headerHeight) / 3}]}>
          <View style={styles.textBox}>
            <Text style={styles.text}>"HISTORY"</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <Bottom setBottomHeight={setBottomHeight}/>
    </View>
  )
})


export default Home
