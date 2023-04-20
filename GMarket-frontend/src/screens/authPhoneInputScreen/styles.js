import { StyleSheet } from "react-native";
import { COLORS } from "../../contansts/colors";
import { FONTS } from "../../contansts/fonts";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 20,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  header: {
    textAlign: "center",
    fontSize: 40,
    color: COLORS.textColor,
    fontWeight: "bold",
  },
  span: {
    color: COLORS.main,
  },
  phone_input: {
    flexDirection: "row",
    justifyContent : "space-around"
  },
  input: {
    backgroundColor:COLORS.second
  }
});
