import { StyleSheet } from "react-native";
import { SPACING } from "../../contansts/spacing";
import { COLORS } from "../../contansts/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: SPACING.paddingHorizontal,
        paddingBottom: 10,
      },
      title: {
        fontSize: 25,
        fontWeight:"bold",
        color:COLORS.textColor,
        marginTop:0
      },
      image : {
        width:"100%",
        height: "40%",
        marginTop:10,
        borderRadius:10,

      }

 
})