import { StyleSheet } from "react-native";
import { COLORS } from "./colors";
import { SPACING } from "./spacing";

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
        paddingHorizontal: SPACING.paddingHorizontal,
        paddingBottom: 10,
        alignItems:"center"
      },
     
       authOption : {
        headerTitleAlign: "center",
        headerTitleStyle:  {
          fontWeight: "bold",
          color:COLORS.textColor
      },
      }
      
}) 