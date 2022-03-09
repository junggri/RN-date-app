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
    ...border(['a']),
    borderColor: "rgba(0,0,0,0.2)",
    height: 80,
    padding: 8,
    display: "flex",
    justifyContent: "space-between",
  },
  place: {},
  address: {}
});
