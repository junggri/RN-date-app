import React, {memo, useMemo, useState} from 'react'
import {Button, Dimensions, Image, ImageBackground, LayoutChangeEvent, SafeAreaView, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native'
import useGetDateCount from "../../hooks/useGetDateCount";
import {HomeStyle} from "./Home.Style";
import Arrow from "../../public/images/arrow.svg"
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from "../../../App";

const {height, width} = Dimensions.get('window')

type HomeScreenProps = NativeStackScreenProps<RootStackParams, 'Home'>;

const Home = memo(({route, navigation}: HomeScreenProps) => {
  const date = useGetDateCount();
  const [recordTextWidth, setRecordTextWidth] = useState<number>(0);
  const [bottomHeight, setBottomHeight] = useState<number>(0)

  const onPressEvent = () => {
    navigation.navigate({key: "test", name: "Date"})
  }

  const onLayOut = (e: LayoutChangeEvent) => {
    setRecordTextWidth(e.nativeEvent.layout.width)
  }

  const layoutHeader = (e: LayoutChangeEvent) => {
    setBottomHeight(e.nativeEvent.layout.height)
  }
  const renderEvent = useMemo(() => {
    return new Array(3).fill(0).map((e, i) => {
      return (
        <View style={HomeStyle.eventItem} key={i}>
          <Text style={{fontSize: 13, color: '#ABB2B9'}}>2022-02-02</Text>
          <Text style={{fontSize: 13, marginTop: 4}} numberOfLines={1}>여기 가보고 싶어</Text>
        </View>
      )
    })
  }, [])

  const renderImg = useMemo(() => {
    return new Array(10).fill(0).map((e, idx) => {
      return (
        <View key={idx} style={HomeStyle.imgItem}>
          <Image source={require("../../public/images/eun_young.jpg")} resizeMode="cover"
                 style={{borderRadius: 5, width: '90%', height: '90%'}}/>
        </View>
      )
    })
  }, [])

  const renderMemory = useMemo(() => {
    return new Array(10).fill(0).map((e, i) => {
      return (
        <View key={i} style={[HomeStyle.diaryItem, {
          borderTopColor: i !== 10 ? "transparent" : '#F7F7F7'
        }]}>
          <View style={{
            padding: 10,
            display: 'flex',
            flexDirection: 'row',
            alignItems: "center",
          }}>
            <Image source={require(`../../public/images/test/${1}.jpg`)} style={{width: 100, height: 62, borderRadius: 1}} onLayout={onLayOut}/>
            <View style={HomeStyle.diaryBody}>
              <Text>테스트입니다.</Text>
              <Text numberOfLines={2} style={{width: width - recordTextWidth - 30, color: '#ABB2B9', fontSize: 13, marginTop: 5}}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dignissimos ea impedit provident vero? Commodi nemo tempora velit veniam. Accusamus autem
                consequuntur earum ex
                expedita fuga omnis possimus repudiandae tempore!</Text>
            </View>
          </View>
        </View>
      )
    })
  }, [recordTextWidth])

  const boxHeader = (text: string) => {
    return (
      <View style={{display: 'flex', justifyContent: "space-between", flexDirection: "row", alignItems: "center"}}>
        <Text style={{fontSize: 16}}>{text}</Text>
        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{fontSize: 12, marginRight: 2}}>더보기</Text>
          <Arrow width={10} height={10}/>
        </View>
      </View>
    )
  }


  return (
    <SafeAreaView style={styles.home}>
      {/*<ImageBackground*/}
      {/*  source={require("../../public/images/eun_young.jpg")}*/}
      {/*  resizeMode='cover'*/}
      {/*  style={styles.backgroundImage}*/}
      {/*  // imageStyle={{borderRadius: 50}}*/}
      {/*/>*/}
      <ScrollView style={styles.container} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
        <View style={HomeStyle.header}>
          <View>
            <Text style={{fontSize: 22}}>HEYLO</Text>
            <Text style={{fontSize: 17}}>안녕,은영아</Text>
          </View>
          <View style={HomeStyle.userIconsBox}>
            <Image source={require("../../public/images/ey.jpg")} style={HomeStyle.userIcon}/>
          </View>
        </View>
        <View style={HomeStyle.event}>
          <View style={{backgroundColor: "white", padding: 20, borderRadius: 20}}>
            <View style={{display: 'flex', justifyContent: "space-between", flexDirection: "row", alignItems: "center"}}>
              <Text style={{fontSize: 16}}>다가오는 이벤트</Text>
              <TouchableWithoutFeedback onPress={() => {
                navigation.push('Date' as any, {key: "asd"} as any)
              }}>
                <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={{fontSize: 12, marginRight: 2}}>더보기</Text>
                  <Arrow width={10} height={10}/>
                </View>
              </TouchableWithoutFeedback>
            </View>
            <View style={{marginTop: 20}}>
              {renderEvent}
            </View>
          </View>
        </View>
        <View style={HomeStyle.registerEvent}>
          <View style={HomeStyle.registerContainer}>
            <Text style={{fontSize: 16, textAlign: 'right'}}>데이트 등록하기</Text>
          </View>
        </View>
        <View style={HomeStyle.want}>
          <View style={HomeStyle.wantContainer}>
            <View style={HomeStyle.wantItem}>
              <View style={HomeStyle.wantList}>
                <Text>가보고 싶어</Text>
              </View>
            </View>
            <View style={HomeStyle.wantItem}>
              <View style={HomeStyle.wantList}>
                <Text>쉬고 싶어</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={HomeStyle.picture}>
          <View style={HomeStyle.pictureHeader}>
            <Text style={{fontSize: 16}}>사진보기</Text>
            <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{fontSize: 12, marginRight: 2}}>사진첩으로 이동</Text>
              <Arrow width={10} height={10}/>
            </View>
          </View>
          <ScrollView style={HomeStyle.pictureBox} horizontal={true} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
            {renderImg}
          </ScrollView>
        </View>
        <View style={HomeStyle.diary}>
          <View style={{padding: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20}}>
            <Text style={{fontSize: 16}}>기록</Text>
            <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{marginRight: 2, fontSize: 12}}>더보기</Text>
              <Arrow width={10} height={10}/>
            </View>
          </View>
          {renderMemory}
        </View>
        <View style={HomeStyle.footer}>
          <Text numberOfLines={1} style={{
            fontSize: 15,
            color: "#BBBBBB",
            marginTop: 20
          }}>우리함께 성장하자</Text>
        </View>
        <View style={{height: bottomHeight}}/>
      </ScrollView>
      <View style={styles.bottom} onLayout={layoutHeader}/>
      {/*<Tab.Navigator screenOptions={{tabBarStyle: {position: 'absolute'}, headerShown: "false"}}>*/}
      {/*  <Tab.Screen name={"Date"} component={Date}/>*/}
      {/*</Tab.Navigator>*/}
    </SafeAreaView>
  )
})

const border = () => {
  return {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "black",
  }
}
const padding = 10;

const styles = StyleSheet.create({
  home: {
    // backgroundColor: "#f8f9fb",
    backgroundColor: "#F8F9FA",
    flex: 1,
  },
  container: {
    paddingTop: 10,
    flex: 1,
    // paddingBottom: 1000
    // ...border()
  },

  backgroundImage: {
    // height: '100%',
    height: 250,
    width: '100%',
    position: "absolute",
    flex: 1,
    justifyContent: "center",
  },

  bottom: {
    ...border(),
    position: "absolute",
    // bottom: height
    bottom: 0,
    height: 70,
    width: '100%',
    backgroundColor: 'white'
  },

});


export default Home
