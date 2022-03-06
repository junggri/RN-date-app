import React, {memo, useEffect, useMemo, useState} from 'react'
import {
  LayoutChangeEvent,
  Text,
  TouchableWithoutFeedback,
  View
} from "react-native";
import {styles} from "./Calender.styles"
import useGetKstTime from "../../hooks/useGetKstTime";
import Arrow from "../../public/images/arrow2.svg";
import FontText from "../../Component-System/FontText/FontText";

const Calender = memo(() => {
  const dateNow = useGetKstTime();
  const [containerWidth, setContainerWidth] = useState<number>(0)
  const [current, setCurrent] = useState<{ year: number, month: number }>({
    year: 0,
    month: 0
  })
  const [day, setDay] = useState<number>(0);

  const handleLayout = (e: LayoutChangeEvent) => {
    setContainerWidth(e.nativeEvent.layout.width)
  }

  const handlePress = (day: number) => {
    setDay(day)
  }

  const pressPreviousButton = () => {
    if (current.month === 0) {
      setCurrent({
        year: current.year - 1,
        month: 11
      })
    } else {
      setCurrent({
        ...current,
        month: current.month - 1
      })
    }
  }

  const pressNextButton = () => {
    if (current.month === 11) {
      setCurrent({
        year: current.year + 1,
        month: 0
      })
    } else {
      setCurrent({
        ...current,
        month: current.month + 1
      })
    }
  }

  const renderCalender = useMemo(() => {

    const before = new Date(current.year, current.month, 0);
    const lastDate = before.getDay();

    const now = new Date(current.year, current.month + 1, 0);
    const countOfDate = now.getDate()

    const array = []

    for (let i = 0; i <= lastDate; i++) {
      array.push(null)
    }
    for (let i = 1; i <= countOfDate; i++) {
      array.push(i)
    }

    return array.map((e, i) => {
      if (!e) {
        return (
          <TouchableWithoutFeedback key={i}>
            <View style={[styles.day, {
              width: containerWidth / 7,
              height: containerWidth / 7,
            }]}
            >
              <View style={{
                backgroundColor: 'black',
                width: 5,
                height: 5,
                borderRadius: 50,
                opacity: 0.2
              }}>
                <Text/>
              </View>
            </View>
          </TouchableWithoutFeedback>
        )
      } else {
        return (
          <TouchableWithoutFeedback onPress={() => handlePress(e)} key={i}>
            <View style={[styles.day, {
              width: containerWidth / 7,
              height: containerWidth / 7,
            }]}>
              <View style={[styles.dayBackground, {
                backgroundColor: e === day ? '#0F3AD1' : "transparent",
                borderRadius: 50,
              }]}>
                <Text style={{
                  color: e === day ? "white" : "black",
                  fontWeight: e === day ? "800" : "500",
                  fontSize: 17
                }}>
                  {e}
                </Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        )
      }
    })
  }, [containerWidth, day, current]);

  const renderHeader = useMemo(() => {
    const data = ["일", "월", "화", "수", "목", "금", "토"];
    return data.map((e) => {
      return (
        <View key={e} style={[styles.day, {width: (containerWidth / 7), height: containerWidth / 7}]}>
          <FontText size={"l"} weight={"bold"} type={"main"}>{e}</FontText>
        </View>
      )
    })
  }, [containerWidth]);

  useEffect(() => {
    setCurrent({
      year: dateNow.getFullYear(),
      month: dateNow.getMonth()
    })
  }, [])


  return (
    <View style={styles.container}>
      <View style={styles.current}>
        <TouchableWithoutFeedback onPress={pressPreviousButton}>
          <View style={styles.arrowBox}>
            <Arrow/>
          </View>
        </TouchableWithoutFeedback>
        <View style={{display: 'flex', flexDirection: "row"}}>
          <Text style={styles.date}>{current.year}년</Text>
          <Text style={styles.date}>{current.month + 1}월</Text>
        </View>
        <TouchableWithoutFeedback onPress={pressNextButton}>
          <View style={[styles.arrowBox, {transform: [{rotateZ: "180deg"}]}]}>
            <Arrow/>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.header}>
        {renderHeader}
      </View>
      <View style={styles.box} onLayout={handleLayout}>
        {renderCalender}
      </View>

    </View>
  )
})


export default Calender
