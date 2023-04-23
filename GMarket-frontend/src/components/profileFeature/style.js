import { StyleSheet } from "react-native";
import { COLORS } from "../../contansts/colors";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    marginTop: 15,
    alignItems: "center",
    flexDirection: "row",
  },
  title: {
    fontSize: 15,
    marginLeft: 10,
    fontWeight:"500",
    color: COLORS.textColor
  },
  icon: {
    width:35,
    textAlign:"center"
  }
});
