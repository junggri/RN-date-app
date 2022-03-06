import React, {FC, memo} from 'react'
import {View, Text} from "react-native";

interface Props {
  children: string
  style?: any
}

const PageTextButton: FC<Props> = memo(({children, style}) => {
  return (
    <View style={{
      height: 40, ...style,
      display: 'flex',
      justifyContent: "center",
    }}>
      <Text>
        {children}
      </Text>
    </View>
  )
})

export default PageTextButton
