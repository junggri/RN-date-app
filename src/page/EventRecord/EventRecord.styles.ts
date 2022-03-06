import {StyleSheet} from "react-native";

//3ECC3E
const border = (): {} => {
  return {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "black",
  }
}
const boxShadow = (): {} => {
  return {
    shadowColor: '#4d4d4d',
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  }
};

const padding = 10;

export const styles = StyleSheet.create({
  container: {},
  placeBox: {
    // backgroundColor: '#0F3AD1',
  },

})

