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
    alignItems: "center"

  },
  date: {
    fontSize: 20,
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
    marginTop: 30
  },
  day: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "center",
  },
  dayBackground: {
    width: 35,
    height: 35,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50
  },
})
