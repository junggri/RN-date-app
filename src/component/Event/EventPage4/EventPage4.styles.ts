import {StyleSheet} from "react-native";


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
  container: {
    flex: 1,
    display: 'flex',
    alignItems: "center",
    marginTop: 140
  },
  image: {width: 200, height: 200}
});
