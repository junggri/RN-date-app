import React, {FC, memo, ReactNode, useEffect, useState} from "react"
import {Image, View} from "react-native";
import {ImagePath} from "../../constant/constant";

interface Props {
  asset: string
}

const SvgImage: FC<Props> = memo(({asset}) => {


  return (
    <Image source={ImagePath.HOME} height={20} width={20}/>
  )
})

export default SvgImage
