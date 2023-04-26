import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { COLORS } from "../../contansts/colors";

export const styles = StyleSheet.create({
 
 
  inputContainer: {
    marginTop: 70,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: 55,
    backgroundColor: COLORS.second,
    height: 65,
    borderRadius: 7,
    marginHorizontal: 8,
    textAlign: "center",
    fontSize: 25,
    fontWeight: "600",
    color: COLORS.textColor,
  },
  focus: {
    borderColor: COLORS.main,
    borderWidth: 2
  },
  invalid:{
    borderColor:"red",
    borderWidth:1.5
  }
});
