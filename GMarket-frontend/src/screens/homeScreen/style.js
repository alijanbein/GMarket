import { StyleSheet } from "react-native";
import { SPACING } from "../../contansts/spacing";
import { COLORS } from "../../contansts/colors";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal:SPACING.paddingHorizontal,
    paddingVertical:20,
  },
  fakeSearch: {
    backgroundColor:COLORS.second,
    height:40,
    borderRadius:60,
    paddingHorizontal:15,
    flexDirection:"row",
    alignItems:"center"
},
categories : {
  marginTop:10,
},
cat_title: {
  fontSize:20,
  fontWeight:"bold",
  color : COLORS.textColor
}
,
cat_container:{
  flexDirection:"row",
  marginTop:10,
  height: 90,
  justifyContent:"space-around"
}

});
