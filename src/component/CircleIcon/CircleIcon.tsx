import React, {memo} from "react";
import {Image} from "react-native";
import {SvgCssUri, SvgXml} from 'react-native-svg';


const CircleIcon = memo(() => {

  const xml = `
  <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.3 25.3"><defs><style>.cls-1{fill:#6ab42d;}.cls-2{fill:none;}</style></defs><circle class="cls-1" cx="12.65" cy="12.65" r="7.32"/><rect class="cls-2" width="25.3" height="25.3"/></svg>
  `
  return (
    <SvgXml xml={xml} width="20%" height="20%"/>
  )

})

export default CircleIcon
