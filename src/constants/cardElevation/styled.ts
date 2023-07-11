import { StyleSheet } from "react-native";
import theme from "../../global/theme/theme";

export const styles = StyleSheet.create({
  cardView: {
    marginBottom: 16,
    elevation: 16,
    backgroundColor: theme.colors.backgroud,
    borderRadius: 8,
    marginStart: 16,
    marginEnd: 16,
    flexDirection: "row",
    height: 56,
    paddingStart: 24,
    alignItems: "center",
  },
  iconSearch: {
    marginEnd: 16,
  },
  InputText: {
    flexDirection: "row",
    color: theme.colors.black,
  },
});
