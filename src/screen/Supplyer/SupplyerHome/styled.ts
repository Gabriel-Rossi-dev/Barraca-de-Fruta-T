import { StyleSheet } from "react-native";
import theme from "../../../global/theme/theme";

export const styles = StyleSheet.create({
  viewText: {
    fontWeight: 400,
    marginTop: 216,
    marginStart: 16,
    marginEnd: 16,
  },
  textHome: {
    fontSize: 19,
    fontStyle: "normal",
  },
  addSupplier: {
    elevation:10,
    flexDirection: "row",
    width: 328,
    height: 40,
    marginTop: 40,
    paddingStart: 8,
    paddingEnd: 8,
    alignItems: "center",
    justifyContent:'center',
    backgroundColor: theme.colors.primary,
    borderRadius: 17,
    alignSelf: "center",
  },
  textAdd: {
    paddingEnd: 10,
    fontSize: 32,
    color: theme.colors.shape ,
  },
  textSupply: {
    fontSize: 18,
    color: theme.colors.shape
  }

});
