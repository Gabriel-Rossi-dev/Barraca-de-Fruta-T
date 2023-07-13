import { StyleSheet } from "react-native";
import theme from "../../global/theme/theme";

export const styles = StyleSheet.create({
  allFruitsRetangle: {
    height: 24,
    width: 24,
    borderColor: theme.colors.black,
    borderRadius: 8,
    marginStart: 16,
    marginTop: 24,
    borderWidth: 1,
  },
  viewRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  textFruitsList: {
    marginStart: 16,
    marginTop: 24,
  },
  FruitsPrimary: {
    height: 24,
    width: 24,
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    marginStart: 16,
    marginTop: 24,
    borderWidth: 1,
  },
});
