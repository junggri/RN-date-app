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
  scrollView: {
    display: 'flex',
    flex: 1,
  },
  headerContainer: {
    ...border(['a']),
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  carousel: {
    width: '100%',
    marginTop: 20
  },
  pastEventItem: {
    ...border(['l']),
    borderLeftWidth: 4,
    borderColor: "#0F3AD1",
    height: 70,
    marginBottom: 20,
    paddingLeft: 10,
    paddingVertical: 2,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  image: {
    width: 70
  }
});
