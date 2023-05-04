import { StyleSheet } from "react-native";
import { COLORS } from "../../contansts/colors";
export const styles = StyleSheet.create({
    container : {
        backgroundColor: COLORS.second,
        width: 130,
        height :100,
        borderRadius: 20,
        marginHorizontal: 15,
        justifyContent:"center",
        alignItems:"center"
    },
    text : {
        fontSize: 20,
        color: COLORS.textColor
    },

    activeContainer : {
        backgroundColor:COLORS.textColor
    },
    activeText : {
        color: COLORS.white
    }

})