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

export const DateStyle = StyleSheet.create({
    container: {
        padding: 10,
    },
    header: {},
    eventContainer: {
        // ...border(),
        marginTop: 10
    },
    eventItem: {
        // ...border(),
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        padding: 5
    }
})
