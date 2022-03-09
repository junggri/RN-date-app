import React, {memo, useEffect, useMemo, useRef, useState} from 'react'
import {Animated, Dimensions, Easing, Image, SafeAreaView, ScrollView, TouchableHighlight, TouchableNativeFeedback, View} from "react-native";
import PageHeader from "../../component/PageHeader/PageHeader";
import {styles} from "./Picture.styles"
import AnimatedValue = Animated.AnimatedValue;
import AnimatedComponent = Animated.AnimatedComponent;
import Cancel from "../../public/images/cancel.svg"

const Picture = memo(() => {
  const {height, width} = Dimensions.get("window")
  const [show, setShow] = useState<boolean>(false);
  const [opacity, setOpacity] = useState<AnimatedValue>(new Animated.Value(0))
  const imageBox = useRef<AnimatedComponent>()
  const container = useRef<View>()

  const onPressImage = () => {
    setShow(true)
  }

  const renderPicture = useMemo(() => {
    return new Array(100).fill(9).map((e, i) => {
      return (
        <TouchableNativeFeedback key={i} onPress={onPressImage}>
          <View style={{
            width: width / 3, height: width / 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <Image source={require("../../public/images/eun_young.jpg")} resizeMode="cover"
                   style={{borderRadius: 5, width: '90%', height: '90%'}}/>
          </View>
        </TouchableNativeFeedback>
      )
    })
  }, [])

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 250,
      easing: Easing.linear,
      useNativeDriver: false
    }).start()

    if (!show) {
      setOpacity(new Animated.Value(0))
    }
  }, [show])


  const interpolateOpacity = opacity.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1]
  })

  useEffect(() => {


  }, [])

  return (
    <View style={{flex: 1, backgroundColor: "white"}}>
      <View>
        <PageHeader/>
      </View>
      <View style={{flex: 1, width: width, paddingBottom: 20}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{
            display: 'flex',
            flexDirection: "row",
            flexWrap: 'wrap',
          }}>
            {renderPicture}
          </View>
        </ScrollView>
      </View>
      {show &&
      <Animated.View style={[styles.container, {opacity: show ? interpolateOpacity : 0}]} ref={imageBox}>
         <TouchableNativeFeedback onPress={() => setShow(false)}>
            <View style={styles.dimmer}/>
         </TouchableNativeFeedback>
         <View style={styles.imageBox}>
            <TouchableNativeFeedback onPress={() => setShow(false)}>
               <View style={styles.closeButton}>
                  <Cancel width={20} height={20}/>
               </View>
            </TouchableNativeFeedback>
            <Image source={require("../../public/images/ey.jpg")} style={styles.image}/>
         </View>
      </Animated.View>
      }
    </View>
  )
})

export default Picture
