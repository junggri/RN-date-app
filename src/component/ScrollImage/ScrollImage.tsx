import react, {FC, memo, useEffect, useMemo, useState} from 'react'
import React from "react";
import {Image, ScrollView, Text, TouchableNativeFeedback, TouchableOpacity, View} from "react-native";
import {Asset, launchImageLibrary} from "react-native-image-picker";
import FontText from "../../Component-System/FontText/FontText";
import {styles} from "./ScrollImage.styles"

interface Props {
  data?: any
}

const ScrollImage: FC<Props> = memo(({data}) => {

  const [imageAsset, setImageAsset] = useState<Asset[]>([])

  const pressImage = async () => {
    const data = await launchImageLibrary({
        selectionLimit: 100,
        mediaType: "photo",
        maxHeight: 1000,
        maxWidth: 1000,
      }
    )
    try {
      setImageAsset([...imageAsset, ...data.assets])
    } catch (e) {
      console.error(e)
    }
  }

  const deleteImage = (e: Asset) => {
    if (!imageAsset) {
      return
    }
    const index = imageAsset.indexOf(e)
    const copy = [...imageAsset];
    copy.splice(index, 1)
    setImageAsset(copy)
  }

  const renderImage = useMemo(() => {
    if (!imageAsset) {
      return []
    }

    return imageAsset.map((e, i) => {
      return (
        <View key={e.fileName}>
          <TouchableNativeFeedback onPress={() => deleteImage(e)}>
            <Image source={{uri: e.uri}} style={[styles.image, {
              marginLeft: i === 0 ? 20 : 10,
            }]}/>
          </TouchableNativeFeedback>
        </View>
      )
    })
  }, [imageAsset])


  useEffect(() => {
    if (!data) {
      return
    }
    setImageAsset(data)
  }, [data])
  return (
    <View style={styles.picture}>
      {/*<FontText size={'l'} weight={"bold"} style={{paddingHorizontal: 20, fontWeight: '500'}}>*/}
      {/*  오늘의 사진*/}
      {/*</FontText>*/}
      <ScrollView
        style={[{marginTop: 15}]}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {renderImage}
        <View style={{display: 'flex', flexWrap: 'wrap'}}>
          <TouchableOpacity onPress={pressImage}>
            <View style={[styles.pictureButton, {marginLeft: !imageAsset.length ? 20 : 10}]}>
              <Text style={{
                color: '#0F3AD1',
                fontSize: 12,
              }}>
                추가
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
})


export default ScrollImage
