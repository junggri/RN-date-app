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
  scrollView: {
    display: 'flex',
    flex: 1,

  },
  headerContainer: {
    backgroundColor: "#0F3AD1"
  },
  carousel: {
    width: '100%',
    marginTop: 20,
    // marginLeft: 20
  },
  pastEvent: {
    marginTop: 40,
    paddingTop: 40,
    ...border(['t']),
    borderColor: "rgba(0,0,0,0.4)",
    flex: 1,
    display: 'flex',
    borderTopWidth: 0.5
  }
});
