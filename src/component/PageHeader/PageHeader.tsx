import React, {FC, memo} from 'react'
import {View, Text, TouchableWithoutFeedback} from "react-native";
import {styles} from "./PageHeader.styles"
import Arrow2 from "../../public/images/arrow2.svg"
import {useNavigation} from '@react-navigation/native';
import border from "../../libs/setBorder";

interface Props {
  canGoBack?: boolean
  header?: string
}

const PageHeader: FC<Props> = memo(({canGoBack = true, header}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => {
        navigation.goBack()
      }}>
        <View style={{...border(['a'])}}>
          <View style={styles.button}>
            {canGoBack && <Arrow2 width={20} height={20}/>}
            {header &&
            <View style={styles.logoText}>
               <Text style={{fontSize: 20, fontWeight: '600', letterSpacing: 1.2, color: "white"}}>
                 {header}
               </Text>
            </View>
            }
          </View>
        </View>
      </TouchableWithoutFeedback>
      <Text style={styles.headerText}>"HEYLO"</Text>
    </View>
  )
})

export default PageHeader
