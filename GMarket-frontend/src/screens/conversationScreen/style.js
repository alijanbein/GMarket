import { StyleSheet } from "react-native";
import { SPACING } from "../../contansts/spacing";
import { COLORS } from "../../contansts/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal:SPACING.paddingHorizontal,
    backgroundColor: "#fff",
    
  },
  header: {
    flexDirection: "row",
    backgroundColor: COLORS.second,
    headerShown: false,
    paddingHorizontal: SPACING.paddingHorizontal,
    paddingVertical: SPACING.paddingHorizontal,
  },
  contentContainerStyle:{
    paddingBottom:120
  },
  name: {
    marginLeft: 10,
    height: "100%",
    textAlignVertical: "center",
    fontSize: 20,
    color:COLORS.textColor
  },
  icon: {
    verticalAlign: "middle",
  },
  ScrollView:{
    padding:20
    
  },
});
