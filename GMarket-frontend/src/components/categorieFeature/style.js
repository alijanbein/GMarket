import { StyleSheet } from "react-native";
import { COLORS } from "../../contansts/colors";


export const styles = StyleSheet.create( {
    container: {
        justifyContent:"center",
        alignItems:"center",
        height:"100%",
        width:70,

    },
    img : {
        borderRadius:100,
        width: 70,
        height:70
    },
    text: {
        color:COLORS.textColor,
        fontSize:10,
        marginTop:5
    }

})