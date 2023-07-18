import { StyleSheet } from "react-native";
import theme from "../../../global/theme/theme";

export const styles = StyleSheet.create({
  viewText: {
    flexDirection: "row",
    height: 56,
    paddingStart: 24,
    alignItems: "center",
  },
  firstCard: {
    marginTop: 80
  },
  headerStyle:{
    marginBottom: 80,
    marginStart: 24,
    flexDirection: 'row',
    marginTop:58
  },
  exit: {
    color: theme.colors.black,
    fontSize: 32,
    marginEnd:16,
    marginStart: 120
  },
  secondCard: {
    marginStart: 16,
    marginTop: 16,
    marginEnd: 16,
    elevation: 16,
    backgroundColor: theme.colors.backgroud,
    borderRadius: 8,
  },
  InputText: {
    flexDirection: "row",
    color: theme.colors.black,
  },
  inputSupply: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginEnd: 16,
    flex: 1,
  },
  iconSearch: {
    marginEnd: 16,
  },
  addSupplier: {
    elevation: 10,
    flexDirection: "row",
    width: 328,
    height: 40,
    marginTop: 170,
    paddingStart: 8,
    paddingEnd: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.primary,
    borderRadius: 17,
    alignSelf: "center",
  },
  textAdd: {
    paddingEnd: 10,
    fontSize: 32,
    color: theme.colors.shape,
  },
  textSupply: {
    fontSize: 18,
    color: theme.colors.shape,
  },
  textRegister: {
    fontSize: 24,
    color: theme.colors.primary
  }
});
