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
    shadowOpacity: 0.01,
    shadowRadius: 4,
  }
}
const padding = 10;

export const HomeStyle = StyleSheet.create({
  header: {
    padding: 10,
    display: 'flex',
    flexDirection: "row",
    justifyContent: "space-between"
  },
  userIconsBox: {
    ...boxShadow(),
    ...border(),
    borderRadius: 50,
    shadowOpacity: 0.06,
    shadowOffset: {width: 0, height: 2},
    // borderColor: '#E8E8E8'
    borderColor: "white"
  },
  userIcon: {
    width: 50,
    height: 50,
    borderRadius: 50,
    ...boxShadow(),
  },
  event: {
    // backgroundColor: 'white',
    padding: padding,
    marginTop: 20,
    ...boxShadow(),
  },
  eventItem: {
    paddingTop: 5,
    paddingBottom: 5
  },
  registerEvent: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  registerContainer: {
    // marginTop: 10,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'white',
    height: 60,
    borderRadius: 10,
    paddingLeft: padding,
    paddingRight: padding

  },
  picture: {
    backgroundColor: 'white',
    marginTop: 10,
    paddingBottom: 10,
    // ...boxShadow(),
  },
  pictureHeader: {
    padding: 10,
    display: 'flex',
    flexDirection: "row",
    justifyContent: 'space-between'
  },
  pictureBox: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  imgItem: {
    width: 150,
    height: 150,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 3
  },
  want: {
    display: 'flex',
    // padding: 10,
    ...boxShadow(),
    marginTop: 10
  },
  wantContainer: {
    display: 'flex',
    flexDirection: "row",
    justifyContent: "space-between"
  },
  wantItem: {
    width: "49%",
    paddingLeft: 10,
    paddingRight: 10
  },
  wantList: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
    ...boxShadow(),
  },
  diary: {
    backgroundColor: "white",
    marginTop: 10,
  },
  diaryItem: {
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
  },
  diaryBody: {
    height: '100%',
    marginLeft: 10,
    width: 'auto',
    // paddingLeft: 10,
    // paddingRight: 10
  },
  footer: {
    // height: 30,
    display: 'flex',
    alignItems: 'center',
    // justifyContent: "center"
  }
})
