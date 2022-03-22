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
  place: {
    paddingHorizontal: 20
  },
  map: {
    marginTop: 20
  },
  picture: {
    // marginTop: 20,
  },
  pictureButton: {
    ...border(['a']),
    width: 120,
    height: 120,
    marginRight: 10,
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
    borderStyle: "dotted"
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 3,
    marginLeft: 0
  },
})
