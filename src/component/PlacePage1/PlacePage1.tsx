import React, {FC, memo, useEffect, useRef, useState} from "react"
import {
  Animated,
  Button,
  Dimensions,
  Easing,
  LayoutChangeEvent,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from "react-native"
import Postcode from "@actbase/react-daum-postcode";
import {styles} from "./PlacePage1.styles"
import AnimatedValue = Animated.AnimatedValue;
import {Address, Geo} from "../../core/type";
import axios from "axios";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {PlaceProps} from "../../page/Place/Place";
import NaverMap from "../Map/Map";
import PageHeader from "../PageHeader/PageHeader";
import FontText from "../../Component-System/FontText/FontText";
import PlaceResult from "../PlaceResult/PlaceResult";


interface Props {
}

type PlaceScreenProps = NativeStackScreenProps<PlaceProps, 'PlacePage1'>

const PlacePage1: FC<Props> = memo(({route, navigation}: PlaceScreenProps) => {
  const {height, width} = Dimensions.get("window");
  const [isSelect, setIsSelect] = useState<boolean>(false);
  const [place, setPlace] = useState<Address | null>(null);
  const [changeHeight, setChangeHeight] = useState<AnimatedValue>(new Animated.Value(0));
  const [decrease, setDecrease] = useState<AnimatedValue>(new Animated.Value(0));
  const [headerHeight, setHeaderHeight] = useState<number>(0);

  const opacity = useRef<AnimatedValue>(new Animated.Value(0)).current

  const [coordinate, setCoordinate] = useState<{
    latitude: number,
    longitude: number
  }>({
    latitude: 0,
    longitude: 0
  })


  const fetchGeocoding = async (address: string) => {
    const {data} = await axios.post(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyBwtQVsUqUL64u_0JlbjAYSIW-By7ykG_c`
    )
    setCoordinate({
      latitude: data.results[0].geometry.location.lat,
      longitude: data.results[0].geometry.location.lng,
    })
  }


  const onPress = () => {
    Animated.timing(changeHeight, {
      toValue: 1,
      duration: 400,
      easing: Easing.linear,
      useNativeDriver: false
    }).start()
    setDecrease(new Animated.Value(0))
    setIsSelect(false)
  }

  const handleSelected = (data: Address | null) => {
    if (!data) {
      return
    }

    setIsSelect(true)
    setPlace(data)

    fetchGeocoding(data.address)

    Animated.timing(decrease, {
      toValue: 1,
      duration: 400,
      easing: Easing.linear,
      useNativeDriver: false
    }).start()
    setChangeHeight(new Animated.Value(0))
  }

  const maxHeight = changeHeight.interpolate({
    inputRange: [0, 1],
    outputRange: [0, height]
  })

  const decreaseHeight = decrease.interpolate({
    inputRange: [0, 1],
    outputRange: [height, 0]
  })

  useEffect(() => {
    Animated.sequence([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 800,
        easing: Easing.linear,
        useNativeDriver: false
      }),
      Animated.delay(500)
    ]).start()
  }, [])

  console.log(place)
  return (
    <View style={{width: '100%', position: "absolute", height: "100%", backgroundColor: "white"}}>
      <View onLayout={(e) => setHeaderHeight(e.nativeEvent.layout.height)} style={{zIndex: 99}}>
        <PageHeader/>
      </View>
      <View style={{height: '100%'}}>
        <Animated.View style={{
          height: !isSelect ? maxHeight : decreaseHeight,
          overflow: "hidden",
          position: "absolute",
          bottom: 0,
          zIndex: 1,
        }}>
          <Postcode
            style={[{width: width, height: height}]}
            jsOptions={{animation: true}}
            onSelected={(data) => handleSelected(data)}
            onError={(error) => console.log(error)}
          />
        </Animated.View>
        <Animated.View style={[styles.body, {opacity: opacity}]}>
          <View>
            <FontText size={27} weight={"bold"} type={"main"}>
              가고싶은 곳을 찾아보세요
            </FontText>
          </View>
          <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
              <FontText size={"l"} weight={"bold"}>
                검색하기
              </FontText>
            </View>
          </TouchableOpacity>
        </Animated.View>
        <View style={[styles.resultBox, {height: height - headerHeight}]}>
          <PlaceResult/>
        </View>
      </View>
      {/*<SafeAreaView style={[styles.container]}>*/}
      {/*  <Animated.View style={*/}
      {/*    [styles.postcodeBox,*/}
      {/*      {*/}
      {/*        height: !isSelect ? maxHeight : decreaseHeight,*/}
      {/*        overflow: "hidden",*/}
      {/*      }*/}
      {/*    ]*/}
      {/*  }>*/}
      {/*    <Postcode*/}
      {/*      style={[{width: width, height: height}]}*/}
      {/*      jsOptions={{animation: true}}*/}
      {/*      onSelected={(data) => handleSelected(data)}*/}
      {/*      onError={(error) => console.log(error)}*/}
      {/*    />*/}
      {/*  </Animated.View>*/}
      {/*</SafeAreaView>*/}
      {/*<View style={[styles.body]}>*/}
      {/*  <View>*/}
      {/*    <FontText size={27} weight={"bold"} type={"main"}>*/}
      {/*      가고싶은곳을 찾아보세요*/}
      {/*    </FontText>*/}
      {/*  </View>*/}
      {/*  <TouchableOpacity onPress={onPress}>*/}
      {/*    <View style={styles.button}>*/}
      {/*      <FontText size={20} weight={"bold"}>*/}
      {/*        주소검색*/}
      {/*      </FontText>*/}
      {/*    </View>*/}
      {/*  </TouchableOpacity>*/}
      {/*</View>*/}

      {/*<PlaceResult/>*/}
      {/*<View style={styles.resultBox}>*/}
      {/*  <View style={styles.textBox}>*/}
      {/*    <Text style={styles.h1}>가고싶은 곳을 찾아보세요</Text>*/}
      {/*  </View>*/}
      {/*  <View style={[styles.buttonBox, {*/}
      {/*    justifyContent: !isSelect ? "center" : "space-between"*/}
      {/*  }]}>*/}
      {/*    <TouchableOpacity style={styles.button} onPress={onPress}>*/}
      {/*      <Text style={styles.buttonText}>주소검색</Text>*/}
      {/*    </TouchableOpacity>*/}
      {/*    {isSelect &&*/}
      {/*    <TouchableOpacity style={styles.button} onPress={() => {*/}
      {/*      navigation.navigate("PlacePage2")*/}
      {/*    }*/}
      {/*    }>*/}
      {/*       <Text style={styles.buttonText}>저장하기</Text>*/}
      {/*    </TouchableOpacity>*/}
      {/*    }*/}
      {/*  </View>*/}
      {/*  {place &&*/}
      {/*  <View style={{width: '100%'}}>*/}
      {/*     <View style={styles.result}>*/}
      {/*        <Text style={{fontSize: 20, fontWeight: "600"}}>이 주소가 맞나요?</Text>*/}
      {/*        <View style={{marginTop: 20}}>*/}
      {/*           <View style={styles.resultTextBox}>*/}
      {/*              <Text style={[styles.text, {fontSize: 17}]}>*/}
      {/*                {place.buildingName}*/}
      {/*              </Text>*/}
      {/*           </View>*/}
      {/*           <View style={styles.resultTextBox}>*/}
      {/*              <Text style={[styles.text, {marginTop: 10, fontSize: 12}]}>*/}
      {/*                {place.roadAddress}*/}
      {/*              </Text>*/}
      {/*           </View>*/}
      {/*        </View>*/}
      {/*     </View>*/}
      {/*     <View style={styles.map}>*/}
      {/*        <NaverMap coordinate={coordinate} height={350}/>*/}
      {/*     </View>*/}
      {/*  </View>*/}
      {/*  }*/}
      {/*</View>*/}

    </View>
  )
})

export default PlacePage1
