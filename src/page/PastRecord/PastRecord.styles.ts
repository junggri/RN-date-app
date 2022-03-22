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
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  body: {
    flex: 1,

  },
  header: {
    paddingHorizontal: 20
  },
  description: {
    marginTop: 40,
    paddingHorizontal: 20
  },
  picture: {
    marginTop: 30
  },
  location: {
    marginTop: 30,
    paddingVertical: 30,
    ...border(['t', 'b']),
    borderTopColor: 'rgba(0,0,0,0.01)',
    borderBottomColor: 'rgba(0,0,0,0.01)',
    backgroundColor: "rgba(0,0,0, 0.01)"
  },
  buttonBox: {
    padding: 50,
    display: 'flex',
    flexWrap: "wrap",
    alignContent: "center",
    flexDirection: 'row',
    justifyContent: "center",
    // ...border(['a'])
  },
  button: {
    marginTop: -10,
    ...border(['a']),
    paddingHorizontal: 12,
    paddingVertical: 7
  }
});
