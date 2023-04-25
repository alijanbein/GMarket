import { StyleSheet } from "react-native";
import { COLORS } from "../../contansts/colors";

export default styles = StyleSheet.create({
    container: {
      flex:1,
      marginTop:20,
      position:"absolute",
      bottom:0,
      left:0,
      flexDirection:"row",
      backgroundColor:COLORS.second,
      width:"100%",
      height:70,
      borderTopRightRadius:10,
      borderTopLeftRadius:10,
      paddingHorizontal:10,
      justifyContent:"space-between",
      alignItems:"center"
    },
    text:{
          fontSize:20 

    }
  });