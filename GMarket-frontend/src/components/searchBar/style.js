import { StyleSheet } from "react-native";
import { COLORS } from "../../contansts/colors";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    marginTop: 15,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: COLORS.second,
    paddingHorizontal:15,
    color:COLORS.textColor,
    borderRadius:50,

  },
  search_input: {
    fontSize:15,
    width:'85%',
    height: 50,
    color:COLORS.textColor
  },
  serach_btn:{
    width:'10%',
    marginLeft:5,
    height:"100%",
    justifyContent:"center",
    verticalAlign:"middle",
  }
});
