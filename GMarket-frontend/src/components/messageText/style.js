import { StyleSheet } from "react-native";
import { COLORS } from "../../contansts/colors";
import { SPACING } from "../../contansts/spacing";

export const style = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: 50,
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    width: "auto",
  },
  text: {
    color: COLORS.white,
    backgroundColor: COLORS.main,
    fontSize:20,
    paddingHorizontal: 20,
    paddingVertical:10,
    height:60,
    verticalAlign:"middle",
    borderRadius:15,
    borderBottomLeftRadius:0
    
  },
});
