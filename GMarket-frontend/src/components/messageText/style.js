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
    marginTop: 25,
  },
  userContainer: {
    justifyContent: "flex-end",
  },
  text: {
    color: COLORS.white,
    backgroundColor: COLORS.main,
    fontSize: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    height: 60,
    verticalAlign: "middle",
    borderRadius: 20,
    borderBottomLeftRadius: 0,
  },
  user: {
    borderBottomLeftRadius: 20,

    borderBottomRightRadius: 0,
  },
});
