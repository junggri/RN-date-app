import React, {FC, memo, useEffect, useRef, useState} from "react"
import {
  Animated,
  Dimensions,
  Easing,
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
import {fetcher} from "../../core/fetcher";
import {CREATE_PLACE} from "../../core/mutation";
import {Place, PlaceInput, Scalars} from "../../core/schema";


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
    );

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

  const createPlace = async () => {
    if (!place) {
      return
    }

    const result = await fetcher.fetch().mutation<{ data: { insertPlace: string } }, PlaceInput>(CREATE_PLACE, {
      data: {
        buildingName: place.buildingName,
        latitude: coordinate.latitude,
        longitude: coordinate.longitude,
        roadAddress: place.roadAddress,
        who: "ey"
      }
    })

    if (result.data) {
      navigation.navigate("PlacePage2")
    } else {

    }


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

  const onClickCloseButton = () => {
    setIsSelect(true);
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

  return (
    <View style={{width: '100%', position: "absolute", height: "100%", backgroundColor: "white"}}>
      <View onLayout={(e) => setHeaderHeight(e.nativeEvent.layout.height)} style={{zIndex: 99}}>
        <PageHeader header={"PLACE"}/>
      </View>
      <View style={{height: '100%'}}>
        <Animated.View style={{
          height: !isSelect ? maxHeight : decreaseHeight,
          overflow: "hidden",
          position: "absolute",
          bottom: 0,
          zIndex: 1,
        }}>
          <View style={styles.closeButtonContainer}>
            <TouchableOpacity onPress={onClickCloseButton}>
              <View style={styles.closeButton}>
                <FontText size={"l"} weight={'bold'}>
                  ??????
                </FontText>
              </View>
            </TouchableOpacity>
          </View>
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
              ???????????? ?????? ???????????????
            </FontText>
          </View>
          <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
              <FontText size={"l"} weight={"bold"}>
                ????????????
              </FontText>
            </View>
          </TouchableOpacity>
        </Animated.View>
        {place &&
        <View style={[styles.resultBox, {height: height - headerHeight}]}>
           <PlaceResult coordinate={coordinate} place={place}/>
           <View style={styles.buttonBox}>
              <TouchableOpacity onPress={onPress}>
                 <View style={styles.flagButton}>
                    <FontText weight={"bold"} size={"m"}>
                       ?????????
                    </FontText>
                 </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={createPlace}>
                 <View style={styles.flagButton}>
                    <FontText weight={"bold"} size={"m"}>
                       ??????
                    </FontText>
                 </View>
              </TouchableOpacity>
           </View>
        </View>
        }
      </View>
    </View>
  )
})

export default PlacePage1
