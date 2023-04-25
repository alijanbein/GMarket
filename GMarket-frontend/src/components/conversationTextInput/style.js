import { StyleSheet } from "react-native";
import { COLORS } from "../../contansts/colors";

export default styles = StyleSheet.create({
    container: {
      marginTop:20,
      position:"absolute",
      bottom:0,
      left:0,
      backgroundColor:COLORS.second,
      width:"100%",
      height:70,
      borderTopRightRadius:10,
      borderTopLeftRadius:10,
      paddingHorizontal:10,
      borderWidth:2,
      borderColor:COLORS.main,
      fontSize:20 
    },
  });