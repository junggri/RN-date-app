import {StyleSheet} from "react-native";
import border from "../../libs/setBorder";

// 3ECC3E

const boxShadow = (): {} => {
  return {
    shadowColor: '#4d4d4d',
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.01,
    shadowRadius: 4,
  }
}
const padding = 10;

export const styles = StyleSheet.create({
  home: {
    ...border([]),
    flex: 1,
    backgroundColor: 'white'
    // padding: 20
  },
  event: {
    ...border(["b"])
  },
  register: {
    ...border(['b']),
  },
  textBox: {
    position: "absolute",
    ...border(['t', 'r']),
    bottom: 0,
    width: 120,
    height: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: "center",
    // backgroundColor: "#0F3AD1"
  },
  text: {
    fontSize: 15,
    // color: "white"
  }

})
