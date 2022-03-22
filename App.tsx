import React from 'react';
import {LogBox} from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from "./src/page/Home/Home";
import Event from "./src/page/Event/Event";
import Register from "./src/page/Register/Register";
import Place from "./src/page/Place/Place";
import Rest from "./src/page/Rest/Rest";
import Picture from "./src/page/Picture/Picture";
import LastPage from "./src/component/LastPage/LastPage";
import Record from "./src/page/Record/Record";
import User from "./src/page/User/User";
import {ApolloProvider} from '@apollo/react-hooks';
import client from "./src/core/client";
import PastRecord from "./src/page/PastRecord/PastRecord";
import {Provider} from "react-redux";
import configure from "./src/core/rootSaga";

export type RootStackParams = {
  Home: undefined,
  Event: undefined,
  // EventDetail: {
  //   type: string
  // },
  Register: undefined,
  Place: undefined
  Rest: undefined
  Picture: undefined
  LastPage: undefined
  Record: undefined
  User: undefined,
  PastRecord: undefined
}

const RootStack = createStackNavigator<RootStackParams>();
const store = configure()

if (__DEV__) {
  import('./reactotron.config').then(() => console.log('Reactotron Configured'))
}

const App = () => {
  return (
    <Provider store={store}>
      <ApolloProvider client={client as any}>
        <NavigationContainer>
          <RootStack.Navigator initialRouteName={"Home"} screenOptions={{headerShown: false}}>
            <RootStack.Screen name={'Home'} component={Home}/>
            <RootStack.Screen name={"Event"} component={Event} options={{gestureEnabled: false}}/>
            <RootStack.Screen name={"Register"} component={Register}/>
            <RootStack.Screen name={"Place"} component={Place} options={{gestureEnabled: false}}/>
            <RootStack.Screen name={"Rest"} component={Rest}/>
            <RootStack.Screen name={"Picture"} component={Picture}/>
            <RootStack.Screen name={"Record"} component={Record}/>
            <RootStack.Screen name={"PastRecord"} component={PastRecord}/>
            <RootStack.Screen name={"LastPage"} component={LastPage} options={{gestureEnabled: false}}/>
            <RootStack.Screen name={"User"} component={User}/>
          </RootStack.Navigator>
        </NavigationContainer>
      </ApolloProvider>
    </Provider>
  );
};

export default App;
