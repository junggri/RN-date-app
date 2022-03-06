import {StyleSheet} from "react-native";
import border from "../../../libs/setBorder";

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
  calender: {
    // display: "flex",
    // alignItems: "center",
    // justifyContent: 'center',
    marginTop: 100,
    flex: 1,
    display: 'flex',
    justifyContent: "space-between"
  },
  button: {
    width: '100%',
    height: 80,
    display: 'flex',
    alignItems: "flex-end",
  },
  nextButton: {
    ...border(['a']),
    width: 80,
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 40,
    borderRadius: 10,
  }
})
