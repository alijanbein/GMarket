import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../../contansts/colors";
import { SPACING } from "../../contansts/spacing";
const { width: screenWidth } = Dimensions.get("window");

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal:SPACING.paddingHorizontal,
    flexDirection: "column",
  },
  image:{
    width: screenWidth - 40,
    height:screenWidth - 40,
    borderRadius:10,
    marginTop:10
  },
  join: {
    position:"absolute",
    height:40,
    justifyContent:"space-between",
    flexDirection:"row",
    paddingHorizontal:20,
    alignItems:"center",
    backgroundColor:COLORS.main,
    bottom:20,
    right:20,
    borderRadius:30,
  },
  join_text:{
    color:COLORS.white,
    fontSize:20,
    marginLeft:10,

  },
  empty:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#fff"
  },
  empty_text:{
    fontSize:20,
    fontWeight:"500"
  }


});
