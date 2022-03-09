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
    ...border(['a']),
    width: '100%',
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  dimmer: {
    backgroundColor: "black",
    opacity: 0.8,
    position: "absolute",
    width: '100%',
    height: "100%"
  },
  imageBox: {
    width: 300,
    height: 300,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    ...border(['a'])

  },
  image: {
    width: '100%',
    height: '100%',
  },
  closeButton: {
    position: "absolute",
    top: -35,
    right: 0,
  }
});
