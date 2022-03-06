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
};

const padding = 10;

export const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    display: 'flex',
    justifyContent: 'center',
    // backgroundColor: "white"
  },
  box: {
    display: 'flex',
    flexDirection: "row",
    flexWrap: "wrap",
  },
  current: {
    display: 'flex',
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
    // ...border(['a']),
    paddingHorizontal: 10,
    paddingVertical: 10

  },
  date: {
    fontSize: 27,
    marginRight: 5,
    fontWeight: '500'
  },
  arrowBox: {
    width: 20,
    height: 18,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
  },

  day: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "center",
  },
  dayBackground: {
    width: 30,
    height: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    // ...border(['a'])
  },
})
