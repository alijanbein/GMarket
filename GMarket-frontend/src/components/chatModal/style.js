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
    paddingBottom:150,
    paddingTop:45,
  },
  container: {
    borderRadius: 10,
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
});
