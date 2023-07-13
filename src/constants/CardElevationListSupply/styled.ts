import { StyleSheet } from "react-native";
import theme from "../../global/theme/theme";

export const styles = StyleSheet.create({
  cardView: {
    marginBottom: 16,
    elevation: 8,
    backgroundColor: theme.colors.shape,
    borderRadius: 8,
    marginStart: 16,
    marginEnd: 16,
    paddingStart: 24,
  },
  iconPerson: {
    color: theme.colors.lightGray,
    marginBottom: 8,
    marginEnd: 8,
  },
  InputText: {
    fontSize: 13,
    flexDirection: "row",
    color: theme.colors.lightGray,
  },
  rowCard:{
    flexDirection: 'row'
  },
  textName: {
    marginTop: 16,
    fontSize: 16,
    marginBottom: 8,
  },
  iconCall :{
    color: theme.colors.lightGray,
    marginBottom: 16,
    marginEnd: 8,
  }
});
