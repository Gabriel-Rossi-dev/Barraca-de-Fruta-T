import { StyleSheet } from "react-native";
import theme from "../../../global/theme/theme";

export const styles = StyleSheet.create({
  exit: {
    color: theme.colors.primary,
    fontSize: 32,
    marginTop: 48,
    marginStart: 312,
    marginEnd: 16,
  },
  chevronForwardPrimary: {
    marginTop:2,
    fontSize: 24,
    color: theme.colors.primary,
  },
  titleText: {
    marginTop: 26,
    marginStart: 16,
    fontSize: 13,
    color: theme.colors.primary,
  },
  titleSupplyer: {
    marginEnd: 16,
    marginTop: 44,
    marginStart: 16,
    fontSize: 15,
    color: theme.colors.darkGray,
  },
  InputText: {
    fontSize: 24,
    marginTop: 24,
    marginStart: 16,
  },
  buttonNext: {
    marginTop: 320,
    marginBottom: 40,
    borderColor: theme.colors.primary,
    height: 40,
    marginStart:20,
    marginEnd:20,
    borderRadius: 20,
    borderWidth: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    color: theme.colors.primary,
    fontSize: 13,

  }
});
