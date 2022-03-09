import React, {FC, memo, useEffect, useRef, useState} from "react"
import {createStackNavigator} from "@react-navigation/stack";
import PlacePage1 from "../../component/PlacePage1/PlacePage1";
import PlacePage2 from "../../component/PlacePage2/PlacePage2";


interface Props {
}

export type PlaceProps = {
  PlacePage1: undefined,
  PlacePage2: undefined
}

const PlaceStack = createStackNavigator<PlaceProps>();

const Place: FC<Props> = memo(() => {
  return (
    <PlaceStack.Navigator initialRouteName={"PlacePage1"} screenOptions={{headerShown: false}}>
      <PlaceStack.Screen name={"PlacePage1"} component={PlacePage1}/>
      <PlaceStack.Screen name={"PlacePage2"} component={PlacePage2} options={{gestureEnabled: false}}/>
    </PlaceStack.Navigator>
  )
})

export default Place
