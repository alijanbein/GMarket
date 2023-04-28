import { StyleSheet } from "react-native";

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
    paddingTop:45
  },
  container: {
    borderRadius: 10,
    backgroundColor: "red",
    width: "95%",
    height: "100%",
    zIndex:6
  },
  bakcdrop: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0.3, 0.3, 0.3, 0)",
    position:"absolute",
    zIndex: 5,
  },
});
