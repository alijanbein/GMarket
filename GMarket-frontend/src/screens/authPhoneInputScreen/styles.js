import { StyleSheet } from "react-native";
import { COLORS } from "../../contansts/colors";
import { FONTS } from "../../contansts/fonts";
import { SPACING } from "../../contansts/spacing";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
    justifyContent: "center",
  },
  phone: {
    backgroundColor: COLORS.second,
    width: 120,
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    borderRadius: 10,
    padding: 10,
    

  },
  input : {
    width: 200,
    marginLeft: 9,
    fontSize: SPACING.NumberFontSize
  },
  label: {
    fontSize: SPACING.NumberFontSize,
    color: COLORS.textColor,
  },
  invalid_text: {
      marginLeft: 15
  },

  invalid_input : {
    borderWidth:2,
    borderColor: COLORS.error
  }
});
