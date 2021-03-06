import React, {FC, memo, useEffect, useState} from 'react'
import {Animated, Easing, Image, Text, View} from "react-native";
import useGoHome from "../../hooks/useGoHome";
import PageHeader from "../PageHeader/PageHeader";
import {styles} from "../Event/EventPage4/EventPage4.styles";
import AnimatedValue = Animated.AnimatedValue;

interface Props {
  who: string
}

const LastPage: FC<Props> = memo(({who}) => {
  const [opacity, setOpacity] = useState<AnimatedValue>(new Animated.Value(0));
  const [margin, setMargin] = useState<AnimatedValue>(new Animated.Value(0));

  useEffect(() => {
    Animated.sequence([
      Animated.delay(500),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: false
      })
    ]).start()

    Animated.sequence([
      Animated.delay(500),
      Animated.timing(margin, {
        toValue: 1,
        duration: 300,
        easing: Easing.linear,
        useNativeDriver: false
      })
    ]).start()
  }, [])

  useGoHome(2000)

  const marginAnimate = margin.interpolate({
    inputRange: [0, 1],
    outputRange: [20, 0]
  })

  return (
    <View style={{flex: 1, backgroundColor: "white"}}>
      <PageHeader canGoBack={false}/>
      <View style={styles.container}>
        <Animated.View style={{opacity: opacity}}>
          <Image source={require("../../public/images/ey.jpg")}
                 style={styles.image}
          />
        </Animated.View>
        <Animated.View style={{
          opacity: opacity,
          marginTop: marginAnimate
        }}>
          <View>
            <Text style={{
              fontSize: 30,
              fontWeight: "600",
              color: '#0F3AD1',
            }}>
              등록 완료
            </Text>
            <Text
              style={{textAlign: "center", marginTop: 2, fontSize: 20}}
            >
              은영,
            </Text>
          </View>
        </Animated.View>
      </View>

    </View>
  )
})
export default LastPage
