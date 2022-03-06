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
    // ...border(['a']),
    width: '100%',
    height: 130,
  },
  button: {
    position: "absolute",
    top: 65,
    left: 10,
    color: "black",
    display: 'flex',
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 10,
    paddingRight: 20
  },
  logoText: {
    backgroundColor: "#0F3AD1",
    marginLeft: 15,
    paddingHorizontal: 2,
    paddingVertical: 1
  },
  headerText: {
    position: 'absolute',
    right: -12,
    bottom: 30,
    transform: [{rotateZ: '90deg'}],
    fontSize: 20
  }

})
