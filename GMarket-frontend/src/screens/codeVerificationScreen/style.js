import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { COLORS } from "../../contansts/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding:50,
        paddingTop:50
    },
    title: {
        textAlign: "center",
        fontSize : 25,
        fontWeight: "bold",
        color: COLORS.textColor
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#bbb',
        borderRadius: 4,
        height: 48,
        paddingHorizontal: 16,
      },
      box: {
        width: 36,
        height: 36,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#bbb',
        marginHorizontal: 8,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
      },
})