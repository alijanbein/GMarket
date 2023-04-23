import { StyleSheet } from "react-native";
import { COLORS } from "../../contansts/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal:20,
    
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
