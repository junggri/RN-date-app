import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from "./src/page/Home/Home";
import Date from "./src/page/Date/Date";


export type RootStackParams = {
  Home: undefined,
  Date: undefined
}

const RootStack = createNativeStackNavigator<RootStackParams>();
const App = () => {

  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName={"Home"} screenOptions={{headerShown: false}}>
        <RootStack.Screen name={'Home'} component={Home}/>
        <RootStack.Screen name={"Date"} component={Date}/>
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
