import {StyleSheet} from "react-native";

const border = (where?: string): {} => {
  return {
    borderLeftWidth: where === 'l' ? 1 : where === 'a' ? 1 : 0,
    borderTopWidth: where === 't' ? 1 : where === 'a' ? 1 : 0,
    borderRightWidth: where === 'r' ? 1 : where === 'a' ? 1 : 0,
    borderBottomWidth: where === 'b' ? 1 : where === 'a' ? 1 : 0,
    borderStyle: "solid",
    borderColor: "black",
  }
}
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

  container: {
    ...border("t"),
    position: 'absolute',
    bottom: 0,
    height: 80,
    width: '100%',
    // backgroundColor: 'red'
  }
})
