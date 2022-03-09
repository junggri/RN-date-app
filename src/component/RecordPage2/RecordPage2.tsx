import React, {memo, useMemo, useState} from 'react'
import {ScrollView, SafeAreaView, View, Text, TouchableOpacity, Image, TouchableNativeFeedback, TextInput, KeyboardAvoidingView} from "react-native";
import {styles} from "./RecordPage2.styles"
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParams} from "../../../App";
import NaverMap from "../../component/Map/Map";
import {Asset, launchCamera, launchImageLibrary} from 'react-native-image-picker';
import PageHeader from "../../component/PageHeader/PageHeader";
import FontText from "../../Component-System/FontText/FontText";

interface Props {
}

type RecordScreenProps = NativeStackScreenProps<RootStackParams, 'Record'>;

const RecordPage2 = memo(({route, navigation}: RecordScreenProps) => {

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

  return (
    <View style={{flex: 1, backgroundColor: "white"}}>
      <PageHeader canGoBack={true} header={"은영이와의 기억"}/>
      <View>
        <View style={styles.place}>
          <FontText size={30} weight={"bold"}>
            현대백화점
          </FontText>
          <FontText size={16} weight={"bold"} style={{textAlign: 'right', marginTop: 10, color: 'rgba(0,0,0,0.5)'}}>
            2022.02.01
          </FontText>
        </View>
        <View style={styles.map}>
          <NaverMap
            coordinate={{
              latitude: 0,
              longitude: 0
            }}
            height={300}
          />
        </View>
        <View style={styles.picture}>
          <FontText size={'l'} weight={"bold"} style={{paddingHorizontal: 20, fontWeight: '500'}}>
            오늘의 사진
          </FontText>
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
      </View>
      <View style={styles.buttonBox}>
        <TouchableOpacity onPress={() => {
          navigation.navigate("RecordPage3")
        }}>
          <View style={styles.button}>
            <FontText size={"l"} weight={'bold'}>
              다음으로
            </FontText>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
})

export default RecordPage2
