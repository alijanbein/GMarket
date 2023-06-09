import { StyleSheet } from "react-native";
import { COLORS } from "../../contansts/colors";
import { SPACING } from "../../contansts/spacing";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal:SPACING.paddingHorizontal,
    paddingVertical:20,
    flexDirection: "column",
  },
  imageContainer: {
        height:200,
        width:"100%",
        backgroundColor:COLORS.second,
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center",
        
  }
,
  textImage:{
        fontSize:20
  },
  image:{
    width:"100%",
    height:"100%"
  },
  contentContainerStyle:{
    paddingBottom:30
  },
  switch:{
    alignItems:"center",
    flexDirection:"row-reverse",
    width:45,
    textAlign:"center",
  },
  auction:{
    marginTop:20
,    flexDirection:"row",
    height:50,
    alignItems:"center"
  },
  auction_text:{
    marginLeft:5,
    fontSize:17,
    fontWeight:"500",
    color:COLORS.textColor
  }

});
