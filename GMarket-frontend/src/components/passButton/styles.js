import { StyleSheet } from "react-native";
import { COLORS } from "../../contansts/colors";
import { SPACING } from "../../contansts/spacing";

export const style = StyleSheet.create({
  btn: {
    backgroundColor: COLORS.main,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    borderRadius: 30,
  },
  textButton: {
    fontSize: 25,
    color: COLORS.white
  },
});
