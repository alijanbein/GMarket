import { StyleSheet } from "react-native";
import { COLORS } from "../../contansts/colors";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    borderRadius: 20,
    backgroundColor: COLORS.second,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 10,
    shadowColor: COLORS.main,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 9,
  },
  image: {
    width: "47%",
    height: 150,
    borderRadius: 10,
  },
  info: {
    marginLeft: 5,
    width: "50%",
    justifyContent: "space-between",
  },
  name: {
    fontSize: 20,
    fontWeight: "700",
    color: COLORS.textColor,
  },
  price: {
    fontSize: 20,
    fontWeight: "700",

    color: COLORS.main,
  },
  desc: {
    fontSize: 13,
  },
});
