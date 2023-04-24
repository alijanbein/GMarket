import { StyleSheet } from "react-native";
import { COLORS } from "../../contansts/colors";
export const styles = StyleSheet.create({
    container : {
        backgroundColor: COLORS.second,
        width: "100%",
        height: 70,
        marginTop:10,
        borderRadius: 20,
        justifyContent:"center",
        paddingHorizontal:10
    },
    botContainer: {
        backgroundColor:COLORS.main
    }

})