import {StyleSheet} from "react-native";
import border from "../../libs/setBorder";


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
    ...border(['t']),
    position: 'absolute',
    bottom: 0,
    height: 70,
    width: '100%',
    display: 'flex',
    flexDirection: "row",
    justifyContent: "space-between",
    // borderColor: "rgba(0,0,0,0.2)"
  },
  button: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: "center"
    // marginTop: 20
  }
})
