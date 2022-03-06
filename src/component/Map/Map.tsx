import React, {FC, memo} from 'react'
import {View} from "react-native";
import NaverMapView, {Marker} from "react-native-nmap";

interface Props {
  coordinate: {
    latitude: number,
    longitude: number
  },
  height: number
}

const NaverMap: FC<Props> = memo(({coordinate, height}) => {
  return (
    <View style={{width: '100%', height: height}}>
      <NaverMapView style={{width: "100%", height: height}}
                    center={{...coordinate, zoom: 16}}
                    zoomGesturesEnabled={true}
                    scaleBar={false}
                    zoomControl={false}
        //             onMapClick={e => console.warn('onMapClick', JSON.stringify(e))}>
      >
        <Marker coordinate={coordinate} width={30} height={40} alpha={0.7}/>
      </NaverMapView>
    </View>
  )
})

export default NaverMap
