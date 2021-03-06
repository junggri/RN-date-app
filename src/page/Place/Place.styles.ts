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
    shadowOpacity: 0.1,
    shadowRadius: 4,
  }
};

const padding = 10;

export const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    textAlign: "center",
    padding: 20,
    color: '#0F3AD1'
  },
  postcodeBox: {
    position: "absolute",
    bottom: 0,
    zIndex: 1000,
    height: '100%'
  },
  resultBox: {
    width: '100%',
    height: '100%',
    paddingTop: 80,
    display: 'flex',
    alignItems: "center",
    zIndex: 1,
    position: "absolute",
    backgroundColor: 'white',
  },
  textBox: {
    display: 'flex',
    flexDirection: "row",
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent: "center",
    // borderRadius: 50,
    // backgroundColor: 'rgba(15, 58, 209, 0.8)',
    // paddingLeft: 10,
    // paddingRight: 10,
  },
  h1: {
    textAlign: 'center',
    color: '#0F3AD1',
    padding: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonBox: {
    position: "absolute",
    bottom: 80,
    display: 'flex',
    flexDirection: "row",
    width: 250,
    justifyContent: "space-between"
  },
  button: {
    padding: 12,
    borderRadius: 20,
    ...boxShadow(),
    backgroundColor: 'rgba(15, 58, 209, 0.6)',
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    letterSpacing: 1.2,
    paddingLeft: 5,
    paddingRight: 5
  },

  result: {
    width: "100%",
    padding: 20,
    marginTop: 20,
  },
  map: {
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
    // marginTop: 100
  }
})
