import React, {FC, memo, useMemo} from 'react'
import {View, Text} from "react-native";
import {styles} from "./Indicator.styles"

interface Props {
  now: number
  length: number
}

const Indicator: FC<Props> = memo(({now, length}) => {
  const renderIndicator = useMemo(() => {

    return new Array(length).fill(0).map((e, i) => {
      return (
        <View key={i} style={[styles.bars, {
          marginRight: i !== length - 1 ? 10 : 0,
          backgroundColor: Math.round(now) === i ? '#0F3AD1' : 'rgba(0,0,0,0.1)',
        }]}/>
      )
    })
  }, [now, length])

  return (
    <View style={styles.container}>
      {renderIndicator}
    </View>
  )
})


export default Indicator
