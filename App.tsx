import React from 'react';

import {LogBox} from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from "./src/page/Home/Home";
import Event from "./src/page/Event/Event";
import EventDetail from "./src/page/EventDetail/EventDetail";
import Register from "./src/page/Register/Register";
import Place from "./src/page/Place/Place";
import Rest from "./src/page/Rest/Rest";
import EventRecord from "./src/page/EventRecord/EventRecord";
import Picture from "./src/page/Picture/Picture";
import Header from "./src/component/Header/Header";


export type RootStackParams = {
  Home: undefined,
  Event: undefined,
  EventDetail: {
    type: string
  },
  Register: undefined,
  Place: undefined
  Rest: undefined
  Picture: undefined
}

const RootStack = createStackNavigator<RootStackParams>();

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName={"Home"} screenOptions={{headerShown: false}}>
        <RootStack.Screen name={'Home'} component={Home}/>
        <RootStack.Screen name={"Event"} component={Event} options={{gestureEnabled: false}}/>
        <RootStack.Screen name={"EventDetail"} component={EventDetail}/>
        <RootStack.Screen name={"Register"} component={Register}/>
        <RootStack.Screen name={"Place"} component={Place}/>
        <RootStack.Screen name={"Rest"} component={Rest}/>
        <RootStack.Screen name={"Picture"} component={Picture}/>
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
