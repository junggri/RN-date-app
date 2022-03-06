import React, {memo, useMemo} from 'react'
import {Dimensions, Image, SafeAreaView, ScrollView, View} from "react-native";

const Picture = memo(() => {
  const {height, width} = Dimensions.get("window")

  const renderPicture = useMemo(() => {
    return new Array(100).fill(9).map((e, i) => {
      return (
        <View key={i} style={{
          width: width / 3, height: width / 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>
          <Image source={require("../../public/images/eun_young.jpg")} resizeMode="cover"
                 style={{borderRadius: 5, width: '90%', height: '90%'}}/>
        </View>
      )
    })
  }, [])

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, width: width}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{
            display: 'flex',
            flexDirection: "row",
            flexWrap: 'wrap'
          }}>
            {renderPicture}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
})

export default Picture
