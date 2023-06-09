import { StyleSheet } from "react-native";
import { COLORS } from "../../contansts/colors";
import { SPACING } from "../../contansts/spacing";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal:SPACING.paddingHorizontal,
    paddingVertical:20
  },
  name: {
    fontSize: 25,
    fontWeight: "bold",
    color: COLORS.textColor,
  },
  number: {
    fontWeight: "300",
    fontSize: 20,
    color: COLORS.textColor,
  },
});
