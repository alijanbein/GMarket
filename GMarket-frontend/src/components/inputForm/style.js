import { StyleSheet } from "react-native";
import { COLORS } from "../../contansts/colors";
import { FONTS } from "../../contansts/fonts";

export const styles = StyleSheet.create( {
    container: {
        marginTop:20,
    }
,
    label :{
           color: COLORS.textColor,
           fontSize:15,
           fontWeight:"bold"           
    },
    input : {
            marginTop: 8,
            padding: 15,
            backgroundColor:"purple",
            borderRadius: 20
    }
})