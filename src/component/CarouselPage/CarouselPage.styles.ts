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
  box: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    marginTop: 80
  },
  textBox: {
    paddingHorizontal: 12,
    paddingVertical: 4
  },
  text: {
    fontSize: 140,
    fontWeight: '800',
    letterSpacing: 1.2,
  },
  addButton: {
    marginTop: 160,
    paddingHorizontal: 14,
    paddingVertical: 6,
    backgroundColor: "#0F3AD1",
  }
})
