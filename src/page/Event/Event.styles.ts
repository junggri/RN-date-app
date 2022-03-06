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
  scrollContainer: {
    backgroundColor: "#0F3AD1",
  },
  placeItem: {
    ...border(['t']),
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#0F3AD1',
    borderColor: "white",
    borderTopWidth: 0.5
  }
  // container: {
  //   paddingHorizontal: 20,
  //   display: "flex",
  //   flexWrap: "wrap"
  // },
  // comingEvent: {
  //   paddingHorizontal: 4,
  //   paddingVertical: 1,
  //   backgroundColor: '#0F3AD1',
  // },
  // eventContainer: {
  //   width: '100%',
  //   // paddingHorizontal: 20,
  //   marginTop: 20,
  //   // ...border(['a'])
  // },
  // eventItem: {
  //   display: 'flex',
  //   flexDirection: "row",
  //   alignItems: "center"
  // },
  // place: {
  //   paddingHorizontal: 20,
  //   marginTop: 10
  // },
  // placeSliderBox: {
  //   height: 80,
  //   marginTop: 20
  // },
  // placeSlider: {},
  // placeItem: {
  //   ...border(['a']),
  //   width: 80,
  //   height: 80,
  //   marginLeft: 15,
  //   borderColor: "rgba(0,0,0,0.2)"
  // }
})
