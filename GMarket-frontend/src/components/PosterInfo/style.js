import { StyleSheet } from "react-native";
import { COLORS } from "../../contansts/colors";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 15,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  key_title: {
    color: COLORS.textColor,
    fontSize: 18,
    fontWeight: "500",
  },
  active: {
    color: COLORS.main,
  },
  description: {
    flexDirection:"column"
  },
  desc_text:{
    marginTop:10,
    height:150,
  }
});
