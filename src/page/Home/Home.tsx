import React, {memo, useEffect, useMemo, useState} from 'react'
import {
  Dimensions,
  Text,
  TouchableWithoutFeedback,
  View
} from 'react-native'
import useGetDateCount from "../../hooks/useGetDateCount";
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from "../../../App";
import {styles} from "./Home.Style"
import Header from "../../component/Header/Header";
import Bottom from "../../component/Bottom/Bottom";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../reducer";
import {PlaceActions} from "../../reducer/Place";

const {height, width} = Dimensions.get('window')

export type HomeScreenProps = NativeStackScreenProps<RootStackParams, 'Home'>;


const Home = memo(({navigation, route}: HomeScreenProps) => {
  const date = useGetDateCount();
  const [recordTextWidth, setRecordTextWidth] = useState<number>(0);
  const [bottomHeight, setBottomHeight] = useState<number>(0)
  const [headerHeight, setHeaderHeight] = useState<number>(0)

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
            <Text style={styles.text}>"RECORD"</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <Bottom setBottomHeight={setBottomHeight}/>
    </View>
  )
})


export default Home
