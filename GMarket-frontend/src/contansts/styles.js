import { StyleSheet } from "react-native";
import { COLORS } from "./colors";
import { SPACING } from "./spacing";

export const Tstyles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    color: COLORS.textColor,
    width: 300,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: SPACING.paddingHorizontal,
    paddingBottom: 10,
    alignItems: "center",
  },

  authOption: {
    headerTitleAlign: "center",
    headerTitleStyle: {
      fontWeight: "bold",
      color: COLORS.textColor,
    },
  },
});

export const phoneStyle = (phone_number) => {
  return (
    phone_number.toString().slice(0, 3) +
    " " +
    phone_number.toString().slice(3, 5) +
    " " +
    phone_number.toString().slice(5, 8) +
    " " +
    phone_number.toString().slice(8)
  );
};
