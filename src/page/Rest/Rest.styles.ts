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
    marginTop: 50,
    marginBottom: 50,
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },
  buttonBox: {
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100
  },
  button: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 15,
    backgroundColor: 'rgba(15, 58, 209, 0.6)',
  }
})

