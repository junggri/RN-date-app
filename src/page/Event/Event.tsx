import React, {memo, useMemo, useState} from 'react'
import {
  Dimensions,
  TouchableOpacity,
} from "react-native";
import {RootStackParams} from "../../../App";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import PastEvent from "../../component/PastEvent/PastEvent";
import {createStackNavigator} from "@react-navigation/stack";
import EventPage1 from "../../component/Event/EventPage1/EventPage1";
import EventPage2 from "../../component/Event/EventPage2/EventPage2";
import EventPage3 from "../../component/Event/EventPage3/EventPage3";
import EventPage4 from "../../component/Event/EventPage4/EventPage4";

type HomeScreenProps = NativeStackScreenProps<RootStackParams, 'Event'>;

// const EventStack = createStackNavigator<RootStackParams>();
export interface EventProps {
  page1: undefined,
  page2: undefined
  page3: undefined
  page4: undefined
}

const EventStack = createStackNavigator<EventProps>();

const Event = memo(({route, navigation}: HomeScreenProps) => {
  const [gap, setGap] = useState(16)
  const [offset, setOffset] = useState(20)

  const {height, width} = Dimensions.get('window');
  const [year, setYear] = useState<number>(0);
  const [month, setMonth] = useState<number>(0);


  return (
    <EventStack.Navigator initialRouteName={"Page1"} screenOptions={{headerShown: false}}>
      <EventStack.Screen name={'Page1'} component={EventPage1}/>
      <EventStack.Screen name={'Page2'} component={EventPage2} options={{gestureEnabled: true}}/>
      <EventStack.Screen name={'Page3'} component={EventPage3} options={{gestureEnabled: true}}/>
      <EventStack.Screen name={'Page4'} component={EventPage4} options={{gestureEnabled: false}}/>
    </EventStack.Navigator>
  )
})

export default Event
