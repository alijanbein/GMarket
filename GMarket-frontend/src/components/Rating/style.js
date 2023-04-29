import { COLORS } from "../../contansts/colors";

const { StyleSheet } = require("react-native");

export default styles = StyleSheet.create({
    container: {
        paddingVertical:10,
        marginTop:10,
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center",
    },
    title: {
      fontSize: 20,
      color:COLORS.textColor,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    ratingContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  });