import { StyleSheet } from "react-native";
import { COLORS } from "./colors";

export const Tstyles = StyleSheet.create({
    title: {
        textAlign: "center",
        fontSize: 25,
        fontWeight: "bold",
        color: COLORS.textColor,
        width:300
      },
      container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 20,
        paddingBottom: 10,
        alignItems:"center"
      },
}) 