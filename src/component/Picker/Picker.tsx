import React, {FC, memo, useEffect, useMemo, useRef, useState} from 'react'
import {Picker} from "@react-native-picker/picker";
import {Text, View} from "react-native";

interface Props {
  value: number
  data: number[]
}

const CustomPicker: FC<Props> = memo(({data}) => {
  const pickerRef = useRef<any>()
  const [show, setShow] = useState<boolean>(false);

  const handleChange = (value: any) => {
    console.log(value)
  }

  const renderPickerItem = useMemo(() => {
    return data.map((e) => {
      return (
        <Picker.Item label={String(e)} value={e} key={e}>{e}</Picker.Item>
      )
    })
  }, [data])

  useEffect(() => {
    // if (!pickerRef.current) {
    //   return
    // }
    pickerRef.current.blur()

  }, [pickerRef.current])

  return (
    <View style={{width: 100}}>
      {/*<Text onPress={() => setShow(!show)}>click</Text>*/}
      <Picker onValueChange={handleChange} itemStyle={{fontSize: 12}}
              style={{}}
              ref={pickerRef}>
        {renderPickerItem}
      </Picker>
    </View>
  )
})


export default CustomPicker
