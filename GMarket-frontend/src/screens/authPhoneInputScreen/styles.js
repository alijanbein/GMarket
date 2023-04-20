import { StyleSheet } from "react-native";
import { COLORS } from "../../contansts/colors";
import { FONTS } from "../../contansts/fonts";

export default styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: COLORS.white,
        padding: 20
    },
    header: {
        textAlign: "center",
        fontSize: 40,
        color:COLORS.textColor,
        fontFamily:FONTS.NotoSerifTamil.name,
        fontWeight: "bold"
    },
    span: {
        color: COLORS.main
    }
})