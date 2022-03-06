import {useNavigation} from '@react-navigation/native'
import {useEffect} from "react";

export default function useGoHome(ms: number) {
  const navigation = useNavigation();


  setTimeout(() => {
    navigation.navigate("Home")
  }, ms)
}
