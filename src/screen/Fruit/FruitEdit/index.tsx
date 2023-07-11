// import { Card } from "react-native-paper";
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

function exitRegister(navigation: any) {
  Alert.alert(
    "Cancelar Cadastro",
    "Tem certeza que quer cancelar o cadastro do colaborador?  Você perderá todas as informações inseridas até aqui",
    [
      {
        text: "Não",
      },
      {
        text: "Sim, cancelar",
        onPress: () => {
          navigation.navigate("SupplyerHome");
        },
      },
    ]
  );
}

export default function FruitRegister() {
  const navigation: any = useNavigation;
  return (
    <View>
      <View style = {styles.headerStyle}>
        <Text style = {styles.textRegister}>
          Atualizar Fruta
        </Text>
      <TouchableOpacity onPress={() => exitRegister(navigation)}>
        <Ionicons
          style={styles.exit}
          name={"ios-close"}
          size={36}
          color={theme.colors.lightGray}
        />
      </TouchableOpacity>
      </View>
      <View style={styles.firstCard}>
        <View style={styles.viewText}>
          <Ionicons
            style={styles.iconSearch}
            name={"nutrition-outline"}
            size={24}
          />
          <TextInput
            style={styles.InputText}
            placeholder="Nome da fruta"
            placeholderTextColor={theme.colors.lightGray}
          />
        </View>
      </View>
      <View style={styles.secondCard}>
        <View style={styles.viewText}>
          <Ionicons style={styles.iconSearch} name={"cash-outline"} size={24} />
          <TextInput
            style={styles.InputText}
            placeholder="Preço do Kilo"
            placeholderTextColor={theme.colors.lightGray}
          />
        </View>
      </View>
      <View style={styles.secondCard}>
        <View style={styles.viewText}>
          <Ionicons
            style={styles.iconSearch}
            name={"server-outline"}
            size={24}
          />
          <TextInput
            style={styles.InputText}
            placeholder="Quantidade no estoque"
            placeholderTextColor={theme.colors.lightGray}
          />
        </View>
      </View>
      <View style={styles.secondCard}>
        <View style={styles.viewText}>
          <Ionicons
            style={styles.iconSearch}
            name={"people-outline"}
            size={24}
          />
          <TextInput
            style={styles.InputText}
            placeholder="Fornecedor"
            placeholderTextColor={theme.colors.lightGray}
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.addSupplier}
        onPress={() => navigation.navigate("FruitFinish")}
      >
        <Text style={styles.textSupply}>Cadastrar Fruta</Text>
      </TouchableOpacity>
    </View>
  );
}
