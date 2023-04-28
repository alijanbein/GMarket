import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../../contansts/colors";
import { FONTS } from "../../contansts/fonts";
import { SPACING } from "../../contansts/spacing";
const { width: screenWidth } = Dimensions.get("window");

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal:SPACING.paddingHorizontal,
    flexDirection: "column",
  },
  image:{
    width: screenWidth - 40,
    height:screenWidth - 40,
    borderRadius:10,
    marginTop:10
  }

});
