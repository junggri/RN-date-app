import React, {FC} from 'react'
import {Text, View} from "react-native";
import {styles} from "../../page/Event/Event.styles";

interface Props {
  title: string
}

const HeaderText: FC<Props> = ({title}) => {
  return (
    <View style={{display: "flex", flexDirection: 'row', alignItems: "center"}}>
      <View style={{backgroundColor: "black", width: 2, height: 16, marginRight: 5}}/>
      <Text style={{fontWeight: '600'}}>{title}</Text>
    </View>
  )
}

export default HeaderText
