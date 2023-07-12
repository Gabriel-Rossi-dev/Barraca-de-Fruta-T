import { StyleSheet } from "react-native";
import theme from "../../../global/theme/theme";

export const styles = StyleSheet.create({
  viewText: {
    elevation: 5,
    flexDirection: 'row',
    height: 56,
    paddingStart: 24,
    alignItems: 'center',
  },
  textSupply: {
    marginStart: 16,
    marginTop: 80,
    marginEnd:16
  },
  InputText: {
    marginStart: 40,
    marginTop: 40,
    backgroundColor: theme.colors.primaryDark,
    
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
    }
});
