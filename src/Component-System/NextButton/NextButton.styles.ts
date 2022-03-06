import {StyleSheet} from "react-native";
import border from "../../libs/setBorder";
import transformer from "babel-jest";


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
    width: '100%',
    height: 80,
    display: 'flex',
    alignItems: "flex-end",
    // justifyContent: 'center',
  },
  button: {
    ...border(['a']),
    marginRight: 40,
    paddingHorizontal: 25,
    paddingVertical: 12,
  }

});
