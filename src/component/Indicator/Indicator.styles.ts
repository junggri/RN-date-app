import {StyleSheet} from "react-native";
import border from "../../libs/setBorder";

//3ECC3E

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
    position: "absolute",
    bottom: 100,
    display: 'flex',
    flexDirection: "row"
  },
  bars: {
    width: 30,
    height: 2,
    backgroundColor: 'rgba(0,0,0,0.1)'
  }
})
