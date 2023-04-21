import { StyleSheet } from "react-native";
import { COLORS } from "../../contansts/colors";

export const styles = StyleSheet.create({
    container : {
        flex: 1,
        paddingVertical: 50,
        paddingHorizontal: 20,
        backgroundColor: "#fff",
        alignItems: "center"
    },
    image : {
        width: 200,
        height: 200,
        borderRadius:150,
    },
    button: {
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.main,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 5,
      },
      buttonText: {
        color: COLORS.white,
        marginLeft: 5,
        fontSize: 16,
      },
})