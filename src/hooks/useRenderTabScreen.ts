import {RootStackParams} from "../../App";
import {ParamListBase, Route} from "@react-navigation/routers";
import CircleIcon from "../component/CircleIcon/CircleIcon";
import SvgImage from "../Component-System/SvgImage/SvgImage";
import {Image} from "react-native";
import * as React from "react";
import {useEffect, useState} from "react";


type Keyof<T extends {}> = Extract<keyof T, string>;

type RouteProp<ParamList extends ParamListBase,
  RouteName extends keyof ParamList = Keyof<ParamList>> = Route<Extract<RouteName, string>, ParamList[RouteName]>;

interface Routes {
  navigation: any
  route: RouteProp<RootStackParams>
}

interface IProps {
  focused: boolean,
  color: string,
  size: number
}

export default function useRenderTabScreen(routes: Routes, props: IProps) {
  const [iconName, setIconName] = useState<string>("")

  useEffect(() => {
    switch (routes.route.name) {
      case "Home":
        setIconName("../public/images/circle.svg")
        break
    }
  }, [props])
  return iconName;

}
