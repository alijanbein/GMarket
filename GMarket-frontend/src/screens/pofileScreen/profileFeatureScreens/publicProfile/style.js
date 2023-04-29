import { StyleSheet } from "react-native";
import { SPACING } from "../../../../contansts/spacing";
import { COLORS } from "../../../../contansts/colors";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: SPACING.paddingHorizontal,
  },
  header: {
    flexDirection: "row",
    headerShown: false,
    paddingHorizontal: SPACING.paddingHorizontal,
    paddingVertical: 10,
    height:90
  },
  name: {
    textAlignVertical: "center",
    fontSize: 25,
    color:COLORS.textColor,
  },
  info: {
    height:"100%",
    marginLeft:30,
    justifyContent:"center",
  },
  line:{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginTop:10
  },
  posters:{
    fontSize:20,
    color:COLORS.textColor,
    marginTop:10,
    fontWeight:"bold"
    }

});
