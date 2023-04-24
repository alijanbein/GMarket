import { StyleSheet } from "react-native";
import { COLORS } from "../../contansts/colors";
export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.second,
    width: "100%",
    height: 70,
    marginTop: 10,
    borderRadius: 20,
    alignItems: "center",
    paddingHorizontal: 10,
    flexDirection: "row",
  },
  botContainer: {
    backgroundColor: COLORS.main,
  },
  info: {
    justifyContent:"center",
    marginLeft: 15,
    height:"60%",
  },
  name: {
    color: COLORS.textColor,
    fontSize: 17,
  },
  text: {
    color: COLORS.textColor,
    fontSize: 11,
    marginTop:5
  },

  botText: {
    color: COLORS.white,
    fontSize: 17,
  },
});
