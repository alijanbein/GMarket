import { StyleSheet } from "react-native";
import { COLORS } from "../../contansts/colors";
import { SPACING } from "../../contansts/spacing";

export const styles = StyleSheet.create({
    container : {
        flex: 1,
        paddingVertical: 50,
        paddingHorizontal: SPACING.paddingHorizontal,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "space-between"
    },
    imageContainer:{
      width: 200,
      height: 200,
      borderRadius:150,
      backgroundColor:COLORS.second,
      marginLeft:"auto" ,
      marginRight:"auto"  ,
      justifyContent:"center",
      alignItems:"center"
    }
    ,
    image : {
        width:"100%",
        height:"100%"
    },
    button: {
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.main,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 5,
      },
      buttonText: {
        color: COLORS.textColor,
        marginLeft: 5,
        fontSize: 20,
      },

})