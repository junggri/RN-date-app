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
}
const padding = 10;

export const EventDetailStyle = StyleSheet.create({
  container: {},
  header: {
    padding: 15,
  },
  placeBox: {
    marginTop: 0,
    padding: 15,
    color: 'white'
  },
  second: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "black",
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: 'rgba(0,0,0,0.1)',
    paddingTop: 20,
    paddingBottom: 20,
    // ...border(),
  },
  imageContainer: {},
  selectImage: {
    ...border(),
    borderStyle: "dotted",
    width: 80,
    height: 80,
    marginLeft: 15,
    borderColor: "rgba(0,0,0,0.2)",
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 3
  },
  image: {
    width: 80,
    height: 80,
    marginLeft: 10,
    borderRadius: 3,
    ...boxShadow(),
  },
  button: {
    width: "90%",
  },
  third: {},
  inputContainer: {
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 10
  },
  textInput: {
    ...border(),
    borderColor: 'rgba(0,0,0,0.2)',
    height: 100,
    padding: 10,
    borderRadius: 10,
    fontSize: 14
  },
  bottom: {
    marginTop: 30,
    display: 'flex',
    flexDirection: "row",
    justifyContent: "center",
    paddingBottom: 60
  },
  buttonItem: {
    width: 100,
    height: 35,
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  }
})
