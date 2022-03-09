import React, {memo, useEffect, useState} from 'react'
import {Animated, Easing, Image, Text, View} from "react-native";
import {EventScreenProps} from "../EventPage2/EventPage2";
import LastPage from "../../LastPage/LastPage";


const EventPage4 = memo(({route, navigation}: EventScreenProps) => {
  return (
    <LastPage who={"ey"}/>
  )
})

export default EventPage4
