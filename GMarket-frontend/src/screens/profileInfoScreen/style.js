import { StyleSheet } from "react-native";
import { SPACING } from "../../contansts/spacing";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: SPACING.paddingHorizontal,
        paddingBottom: 10,
        alignItems:"center",
        justifyContent: "space-between"
      },
    type : {
        flexDirection: "row",
        marginTop: 20,
        justifyContent: "center"
    }
})