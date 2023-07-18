import { styles } from "./styled";
import { Ionicons } from "@expo/vector-icons";
import theme from "../../../global/theme/theme";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Text, TouchableOpacity, View, Alert } from "react-native";

function exitRegister(navigation: any) {
  Alert.alert(
    "Cancelar Cadastro",
    "Tem certeza que quer cancelar o cadastro da fruta?  Você perderá todas as informações inseridas",
    [
      {
        text: "Não",
      },
      {
        text: "Sim, cancelar",
        onPress: () => {
          navigation.navigate("SupplyerList");
        },
      },
    ]
  );
}

export default function FruitRegister() {
  
  const route = useRoute();
  const index = route.params;
  const navigation: any = useNavigation();
  return (
    <View>
      <View style={styles.headerStyle}>
        <Text style={styles.textRegister}>Fornecedor</Text>
        <TouchableOpacity onPress={() => exitRegister(navigation)}>
          <Ionicons
            style={styles.exit}
            name={"ios-close"}
            size={36}
            color={theme.colors.lightGray}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
