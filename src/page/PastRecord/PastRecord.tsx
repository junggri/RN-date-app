import React, {FC, memo} from 'react'
import {ScrollView, Text, TouchableWithoutFeedback, View} from 'react-native'
import {styles} from "./PastRecord.styles"
import PageHeader from "../../component/PageHeader/PageHeader";
import FontText from '../../Component-System/FontText/FontText';
import ScrollImage from "../../component/ScrollImage/ScrollImage";
import NaverMap from "../../component/Map/Map";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParams} from "../../../App";

interface Props {

}

export type RecordScreenProps = NativeStackScreenProps<RootStackParams, 'Record'>;

const PastRecord: FC<Props> = memo(({route, navigation}: RecordScreenProps) => {

  return (
    <View style={styles.container}>
      <View>
        <PageHeader canGoBack={true}/>
      </View>
      <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <FontText size={30} weight={'bold'} style={{fontWeight: '400'}}>
            현대백화점
          </FontText>
          <Text style={{fontSize: 17, textAlign: 'right', marginTop: 10}}>2022.10.02</Text>
        </View>
        <View style={styles.description}>
          <FontText
            size={22}
            weight={"bold"}
            style={{fontWeight: '900'}}
          >
            기억의 글
          </FontText>
          <FontText
            size={18}
            weight={"bold"}
            numberOfLine={10}
            style={{lineHeight: 25, marginTop: 10}}
          >
            오늘은 여기가서 밥을 먹었는데, 오늘은 여기가서 밥을 먹었는데, 오늘은 여기가서 밥을 먹었는데, 오늘은 여기가서 밥을 먹었는데, 오늘은 여기가서 밥을 먹었는데, 오늘은 여기가서 밥을 먹었는데,
          </FontText>
        </View>
        <View style={styles.picture}>
          <FontText
            size={22}
            weight={"bold"}
            style={{fontWeight: '900', paddingHorizontal: 20}}
          >
            오늘의 사진
          </FontText>
          <ScrollImage/>
        </View>
        <View style={styles.location}>
          <FontText
            size={22}
            weight={"bold"}
            style={{fontWeight: '900', paddingHorizontal: 20}}
          >
            위치보기
          </FontText>
          <View style={{marginTop: 10}}>
            <NaverMap coordinate={{latitude: 0, longitude: 0}} height={300}/>
          </View>
        </View>
        <View style={styles.buttonBox}>
          <TouchableWithoutFeedback onPress={() => {
            navigation.navigate("LastPage")
          }}>
            <View style={styles.button}>
              <FontText size={18} weight={'bold'}>
                한번 더 가보기
              </FontText>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </ScrollView>
    </View>
  )
})

export default PastRecord
