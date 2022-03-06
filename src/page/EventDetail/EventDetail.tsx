import React, {memo, useMemo, useState} from 'react'
import {ScrollView, SafeAreaView, View, Text, TouchableOpacity, TouchableOpacityComponent, Image, TouchableNativeFeedback, TextInput} from "react-native";
import {EventDetailStyle} from "./EventDetail.styles";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParams} from "../../../App";
import NaverMap from "../../component/Map/Map";
import {Asset, launchCamera, launchImageLibrary} from 'react-native-image-picker';
import MyButton from "../../Button/Button";

interface Props {
}

type DetailScreenProps = NativeStackScreenProps<RootStackParams, 'EventDetail'>;

const EventDetail = memo(({route, navigation}: DetailScreenProps) => {
  const [imageAsset, setImageAsset] = useState<Asset[] | undefined>([])
  const [value, setValue] = useState<string>("");

  const pressImage = async () => {
    const data = await launchImageLibrary({
        selectionLimit: 100,
        mediaType: "photo",
        maxHeight: 80,
        maxWidth: 80,
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

    return imageAsset.map(e => {
      console.log(e)
      return (
        <View key={e.fileName}>
          <TouchableNativeFeedback onPress={() => deleteImage(e)}>
            <Image source={{uri: e.uri}} style={EventDetailStyle.image}/>
          </TouchableNativeFeedback>
        </View>
      )
    })
  }, [imageAsset])

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "white"}}>
      <ScrollView style={EventDetailStyle.container}>
        <View style={EventDetailStyle.header}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: '#0F3AD1',}}>은영이와의 기억</Text>
        </View>
        <View style={EventDetailStyle.placeBox}>
          <View style={EventDetailStyle.placeInfo}>
            <Text style={{fontSize: 20, fontWeight: "bold"}}>현대백화점</Text>
            <Text style={{fontSize: 15, marginTop: 4}}>한글비석로 480</Text>
            <Text style={{fontSize: 12, textAlign: "right", color: '#0F3AD1', marginTop: 10}}>2022-02-01</Text>
          </View>
          <View style={{width: '100%', marginTop: 20}}>
            <NaverMap coordinate={{
              latitude: 0,
              longitude: 0
            }} height={200}/>
          </View>
        </View>
        <View style={EventDetailStyle.second}>
          <Text style={{paddingLeft: 15, paddingRight: 15, fontWeight: "bold"}}>오늘의 사진</Text>
          <ScrollView
            style={[EventDetailStyle.imageContainer, {marginTop: 10}]}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {renderImage}
            <View style={{display: 'flex', flexWrap: 'wrap'}}>
              <TouchableOpacity onPress={pressImage}>
                <View style={EventDetailStyle.selectImage}>
                  <Text style={{color: '#0F3AD1', fontSize: 12}}>추가</Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
        <View style={EventDetailStyle.third}>
          <Text style={{paddingLeft: 15, paddingRight: 15, fontWeight: "bold"}}>오늘은 이런일이 있었어</Text>
          <View style={EventDetailStyle.inputContainer}>
            <TextInput
              style={EventDetailStyle.textInput}
              multiline
              value={value}
              onChangeText={(text) => setValue(text)}
              placeholder={"오늘은 무슨일이 있었을까?"}
            />
          </View>
        </View>
        <View style={EventDetailStyle.bottom}>
          <View style={{display: "flex", flexDirection: 'row', width: "80%", justifyContent: "space-between"}}>
            <View style={EventDetailStyle.buttonItem}>
              <Text style={{color: "#0F3AD1", fontSize: 15}}>취소</Text>
            </View>
            <View style={[EventDetailStyle.buttonItem, {backgroundColor: "#0F3AD1"}]}>
              <Text style={{color: 'white', fontSize: 15}}>저장</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
})

export default EventDetail
