import {StyleSheet} from "react-native";

const border = (where?: string): {} => {
  return {
    borderLeftWidth: where === 'l' ? 1 : where === 'a' ? 1 : 0,
    borderTopWidth: where === 't' ? 1 : where === 'a' ? 1 : 0,
    borderRightWidth: where === 'r' ? 1 : where === 'a' ? 1 : 0,
    borderBottomWidth: where === 'b' ? 1 : where === 'a' ? 1 : 0,
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

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    ...border('b'),
    height: 130
  },
  left: {
    flexGrow: 1,
    ...border('r'),
    height: '100%',
  },
  user: {
    position: "absolute",
    bottom: 10,
    left: 20

  },

  right: {
    ...border(),
    height: '100%',
    display: 'flex',
    position: "relative",
    justifyContent: "flex-end",
    width: 43
  },
  rotate: {
    position: "absolute",
    writingDirection: "ltr",
    transform: [{rotate: '90deg'}],
    right: -12,
    bottom: 30,
    fontSize: 20
  }
})
