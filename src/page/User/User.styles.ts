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
    flex: 1,
    backgroundColor: "white"
  },
  header: {
    display: 'flex',
    padding: 20,
    ...border(['b']),
    flexDirection: "row",
    justifyContent: "space-between"
  },
  body: {
    ...border(['a']),
    borderColor: 'red',
    flex: 1,
    padding: 20
  }

})
