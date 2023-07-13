
import { styles } from "./styled";
import { Ionicons } from "@expo/vector-icons";
import theme from "../../../global/theme/theme";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Alert,
} from "react-native";
import CardElevation from "../../../constants/CardElevationInput/CardElevationInput";

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
