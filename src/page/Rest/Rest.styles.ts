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
    display: 'flex',
    justifyContent: "center",
    paddingHorizontal: 20,
    flexWrap: "wrap"
  },
  headerContainer: {
    paddingHorizontal: 10,
    paddingVertical: 7,
    backgroundColor: '#0F3AD1',
    marginBottom: 60
  },

  buttonBox: {
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100
  },
  button: {
    ...border(['a']),
    width: 100,
    height: 40,
    display: 'flex',
    alignItems: "center",
    justifyContent: "center"
  }
})

