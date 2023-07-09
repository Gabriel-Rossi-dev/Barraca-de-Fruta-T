import { TouchableOpacity } from "react-native-gesture-handler";
import { View, Text } from "react-native";
import theme from "../../global/theme/theme";
import { styles } from "./styled";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export function ButtonNextScreen() {
  
  const navigation: any = useNavigation();
  return (
    <TouchableOpacity style={styles.buttonNext}
    onPress={navigation.navigate('SupplyerName')}>
      <Text style={styles.buttonText}>Próximo</Text>
      <Ionicons
        style={styles.chevronForwardPrimary}
        name={"ios-chevron-forward"}
        size={36}
        color={theme.colors.lightGray}
      />
    </TouchableOpacity>
  );
}

//onPress={() => navigation.navigate("SupplyerCPF")}
