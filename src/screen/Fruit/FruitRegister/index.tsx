
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
import CardElevation from "../../../constants/cardElevation/CardElevation";

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
          navigation.navigate("FruitHome");
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
        <Text style={styles.textRegister}>Cadastrar Fruta</Text>
        <TouchableOpacity onPress={() => exitRegister(navigation)}>
          <Ionicons
            style={styles.exit}
            name={"ios-close"}
            size={36}
            color={theme.colors.lightGray}
          />
        </TouchableOpacity>
      </View>
      <CardElevation nameIcon={'nutrition-outline'} placeholderText="Nome da fruta" />
      <CardElevation nameIcon={'cash-outline'} placeholderText="Preço do Kilo"/>
      <CardElevation nameIcon={'server-outline'} placeholderText="Quantidade no estoque"/>
      <CardElevation nameIcon={'people-outline'} placeholderText="Fornecedor"/>
      <TouchableOpacity
        style={styles.addSupplier}
        onPress={() => navigation.navigate('FruitList')}
      >
        <Text style={styles.textSupply}>Cadastrar Fruta</Text>
      </TouchableOpacity>
    </View>
  );
}
