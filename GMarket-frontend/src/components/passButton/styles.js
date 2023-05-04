import { StyleSheet } from "react-native";
import { COLORS } from "../../contansts/colors";

export const style = StyleSheet.create({
  btn: {
    backgroundColor: COLORS.main,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    borderRadius: 30,
    width: "100%"
  },
  textButtonActive: {
    fontSize: 25,
    color: COLORS.white,
  },
  textButtonDisabled: {
    color: "#bbbcc6",
    fontSize: 25,
  },
  btnInactive: {
    backgroundColor: COLORS.second,
  },
});
