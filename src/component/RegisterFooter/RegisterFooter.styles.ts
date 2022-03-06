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
    height: 70,
    position: "absolute",
    bottom: 0,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
  },
  button: {
    ...border(),
    ...boxShadow(),
    width: 100,
    height: 40,
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderColor: '#0F3AD1',
  }
})
