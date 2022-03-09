import React, {memo, useState} from 'react'
import {createStackNavigator} from "@react-navigation/stack";
import RecordPage1 from "../../component/RecordPage1/RecordPage1";
import RecordPage2 from "../../component/RecordPage2/RecordPage2";
import RecordPage3 from "../../component/RecordPage3/RecordPage3";

export interface RecordPageProps {
  RecordPage1: undefined,
  RecordPage2: undefined
  RecordPage3: undefined
}

const RecordStack = createStackNavigator<RecordPageProps>();

const Record = memo(() => {
  return (
    <RecordStack.Navigator initialRouteName={'RecordPage1'} screenOptions={{headerShown: false}}>
      <RecordStack.Screen name={"RecordPage1"} component={RecordPage1}/>
      <RecordStack.Screen name={"RecordPage2"} component={RecordPage2}/>
      <RecordStack.Screen name={"RecordPage3"} component={RecordPage3}/>
    </RecordStack.Navigator>
  )
})

export default Record


