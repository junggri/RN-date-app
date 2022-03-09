import {StyleSheet} from "react-native";
import border from "../../libs/setBorder";

;

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
  },
  headerContainer: {
    display: 'flex',
    flexWrap: "wrap",
    ...border(['b']),
    flexDirection: "row",
    justifyContent: "space-between"
  },
  headerButtonContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: "center"
  },
  headerButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: "center",
    // ...border(['a'])
    marginRight: 20
  },
  header: {
    ...border(['r']),
    paddingVertical: 15,
    width: 100,
    display: 'flex',
    alignItems: 'center',
  },
  second: {
    flex: 1,
    display: 'flex',
    flexDirection: "row"
  },
  fakeBox: {
    width: 100,
    height: '100%',
    ...border(['r']),
  },
  textInputContainer: {
    padding: 10,
  },
  inputAccessory: {
    ...border(['t']),
    ...boxShadow(),
    borderColor: "rgba(0,0,0,0.2)",
    height: 50,
    display: 'flex',
    alignItems: "space-between",
    justifyContent: "center",
    shadowOffset: {width: 0, height: -2},
    shadowOpacity: 0.15,
    backgroundColor: "white",
  },
  accessoryButton: {
    marginRight: 20,
  },
  buttonBox: {
    ...border(['a']),
    position: "absolute",
    bottom: 55,
    right: 40,
    paddingHorizontal: 25,
    paddingVertical: 12,
  }
});
