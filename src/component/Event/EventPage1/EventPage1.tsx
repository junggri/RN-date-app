import React, {useEffect} from "react"
import {SafeAreaView, ScrollView, Text, TouchableWithoutFeedback, View} from "react-native";
import {styles} from "../../../page/Event/Event.styles";
import PageHeader from "../../PageHeader/PageHeader";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParams} from "../../../../App";
import FontText from "../../../Component-System/FontText/FontText";
import {useDispatch, useSelector} from "react-redux";
import {RootState, State} from "../../../reducer";
import {PlaceActions} from "../../../reducer/Place";
import {Place} from "../../../core/schema";


type ScreenProps = NativeStackScreenProps<RootStackParams, 'Event'>;
const EventPage1 = ({route, navigation}: ScreenProps) => {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.place);


  const renderPlace = () => {
    return new Array(10).fill(0).map((e, i) => {
      return (
        <TouchableWithoutFeedback onPress={() => {
          navigation.navigate("Page2")
        }} key={i}>
          <View style={[styles.placeItem, {
            marginBottom: i === 9 ? 50 : 0,
            borderBottomColor: i === 9 ? "white" : 'transparent',
            borderBottomWidth: i === 9 ? 0.5 : 0,
          }]}>
            <FontText size={35} weight={"bold"} style={{color: "white"}}>
              현대 백화점
            </FontText>
            <FontText size={"l"} weight={"light"} style={{color: "white", marginTop: 5, lineHeight: 28}}>
              한글비석로 480
              한글비석로 480
              한글비석로 480
              한글비석로 480
              한글비석로 480한글비석로 480
            </FontText>
          </View>
        </TouchableWithoutFeedback>
      )
    })
  }


  useEffect(() => {
    dispatch(PlaceActions.getPlace())
  }, [])

  return (
    <View style={{flex: 1, backgroundColor: "white"}}>
      <PageHeader header={"DATE"}/>
      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {renderPlace()}
      </ScrollView>
    </View>
  )
}

export default EventPage1
