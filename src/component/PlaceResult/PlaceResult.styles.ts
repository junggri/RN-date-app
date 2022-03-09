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
  container: {},
  header: {
    paddingHorizontal: 20,
    display: 'flex',
    flexWrap: 'wrap'
  },
  textHeader: {
    margin: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#0F3AD1'
  },
  result: {
    paddingHorizontal: 20,
    marginTop: 6
  },
  map: {
    marginTop: 20
  },
})
