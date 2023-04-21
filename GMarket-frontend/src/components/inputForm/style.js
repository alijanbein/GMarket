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
           fontSize:13,
           fontWeight:"bold",
           marginLeft:2     
    },
    input : {
            marginTop: 8,
            padding: 15,
            backgroundColor:COLORS.second,
            borderRadius: 10,
            color: COLORS.textColor,
            fontSize: 20
    },
    invalid:{
        borderColor: COLORS.error,
        borderWidth:2
    }
})