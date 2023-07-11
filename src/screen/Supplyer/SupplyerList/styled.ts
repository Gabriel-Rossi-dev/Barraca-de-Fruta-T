import { StyleSheet } from "react-native";
import theme from "../../../global/theme/theme";

export const styles = StyleSheet.create({
  viewText: {
    flexDirection: 'row',
    height: 56,
    paddingStart: 24,
    alignItems: 'center',
  },
  textSupply: {
    elevation: 16,
    backgroundColor: theme.colors.backgroud,
    borderRadius: 8,
    marginStart: 16,
    marginTop: 80,
    marginEnd:16
  },
  InputText: {
    flexDirection: 'row',
    color: theme.colors.black
  },
  inputSupply: {
    flexDirection: 'row',
    justifyContent:'center',
    alignItems: 'center',
    marginEnd: 16,
    flex: 1,
  },
    iconSearch:{
      marginEnd: 16  
    },
    marginTop: {
      paddingTop: 80
    }
});
