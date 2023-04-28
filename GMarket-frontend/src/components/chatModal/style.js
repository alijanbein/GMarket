import { StyleSheet } from "react-native";
import { COLORS } from "../../contansts/colors";

export const styles = StyleSheet.create({
  overlay: {
    // ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: 10,
    textAlign: "center",
    paddingBottom:100,
    paddingTop:45,
  },
  container: {
    borderRadius: 20,
    backgroundColor: "#fff",
    width: "95%",
    height: "100%",
    zIndex:6,
    elevation: 4,

  },
  bakcdrop: {
    width: 1000,
    height: 1000,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position:"absolute",
    zIndex: 5,
    // backgroundColor:"yellow"
  },
  header: {
    backgroundColor:COLORS.second,
    flexDirection:"row",
    paddingVertical:10,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    justifyContent:"center"
},
bot_name:{
    fontSize:30,
    height:"100%",
    fontWeight:"700",
    color:COLORS.main,
    textAlignVertical:"center",
    marginLeft:15
},
second_name_color:{
    color:COLORS.textColor
}
});
