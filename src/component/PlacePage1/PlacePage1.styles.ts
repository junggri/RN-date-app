import {StyleSheet} from "react-native";
import border from "../../libs/setBorder";

//3ECC3E

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
  container: {
    width: '100%',
    height: '100%',
    position: "absolute",
  },
  postcodeBox: {
    position: "absolute",
    bottom: 0,
    height: '100%',
  },
  body: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    marginTop: 100
  },
  button: {
    ...border(['a']),
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 50,
  },
  resultBox: {
    position: "absolute",
    width: '100%',
    backgroundColor: "white"
  }
  // resultBox: {
  //   width: '100%',
  //   height: '100%',
  //   paddingTop: 80,
  //   display: 'flex',
  //   alignItems: "center",
  //   zIndex: 1,
  //   position: "absolute",
  //   backgroundColor: 'white',
  // },
  // textBox: {
  //   display: 'flex',
  //   flexDirection: "row",
  //   flexWrap: 'wrap',
  //   alignContent: 'center',
  //   justifyContent: "center",
  // },
  // h1: {
  //   textAlign: 'center',
  //   color: '#0F3AD1',
  //   padding: 10,
  //   fontSize: 20,
  //   fontWeight: "bold",
  // },
  // buttonBox: {
  //   position: "absolute",
  //   bottom: 80,
  //   display: 'flex',
  //   flexDirection: "row",
  //   width: 250,
  //   justifyContent: "space-between"
  // },
  // button: {
  //   padding: 12,
  //   borderRadius: 20,
  //   ...boxShadow(),
  //   backgroundColor: 'rgba(15, 58, 209, 0.6)',
  // },
  // buttonText: {
  //   textAlign: "center",
  //   color: "white",
  //   letterSpacing: 1.2,
  //   paddingLeft: 5,
  //   paddingRight: 5
  // },
  //
  // result: {
  //   width: "100%",
  //   padding: 20,
  //   marginTop: 20,
  // },
  // resultTextBox: {
  //   display: 'flex',
  //   flexWrap: 'wrap'
  // },
  // text: {
  //   // ...border(),
  //   padding: 5,
  //   paddingLeft: 10,
  //   paddingRight: 10,
  //   borderRadius: 10,
  //   backgroundColor: "white",
  //   borderColor: 'rgba(0,0,0,0.2)'
  // },
  // map: {
  //   display: 'flex',
  //   alignItems: "center",
  //   justifyContent: "center",
  //   // marginTop: 100
  // }
})
