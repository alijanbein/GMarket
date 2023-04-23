import { StyleSheet } from "react-native";
import { COLORS } from "../../contansts/colors";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    marginTop: 15,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: COLORS.second,
    paddingHorizontal:15,
    color:COLORS.textColor,
    borderRadius:50,

  },
  search_input: {
    fontSize:15,
    width:'80%',
    height: 50,
    backgroundColor:"red"
  }
});
