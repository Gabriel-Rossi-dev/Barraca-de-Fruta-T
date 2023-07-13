import { View, Text, Alert } from "react-native";
import { styles } from "./styled";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";
import theme from "../../../global/theme/theme";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { CheckBoxSupplyerFruits } from "../../../constants/CheckBoxSupplyerFruits/CheckBoxSupplyerFruits";
import { Checkbox } from "react-native-paper";

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

export default function SupplyerName() {
  const [fruitSupply, setfruitSupply] = useState("");

  async function handleNameState() {
    await AsyncStorage.setItem("fruitSupply", fruitSupply);
  }
  async function getSupplyerData() {
    const nameValue = await AsyncStorage.getItem("nameSupply");
    const cpfValue = await AsyncStorage.getItem("cpfSupply");
    const phoneValue = await AsyncStorage.getItem("phoneSupply");

    console.log(nameValue);
    console.log(cpfValue);
    console.log(phoneValue);
  }
  const navigation: any = useNavigation();

  getSupplyerData();

  return (
    <View>
      <TouchableOpacity onPress={() => exitRegister(navigation)}>
        <Ionicons
          style={styles.exit}
          name={"ios-close"}
          size={36}
          color={theme.colors.lightGray}
        />
      </TouchableOpacity>
      <View style={styles.ViewHeaderText}>
        <TouchableOpacity onPress={() => navigation.navigate("SupplyerName")}>
          <Text style={styles.titleText}>Nome</Text>
        </TouchableOpacity>
        <Ionicons
          style={styles.chevronForward}
          name={"ios-chevron-forward"}
          size={36}
          color={theme.colors.lightGray}
        />
        <TouchableOpacity onPress={() => navigation.navigate("SupplyerCPF")}>
          <Text style={styles.titleTextSecond}>CPF</Text>
        </TouchableOpacity>
        <Ionicons
          style={styles.chevronForward}
          name={"ios-chevron-forward"}
          size={36}
          color={theme.colors.lightGray}
        />
        <TouchableOpacity onPress={() => navigation.navigate("SupplyerPhone")}>
          <Text style={styles.titleTextSecond}>Telefone</Text>
        </TouchableOpacity>
        <Ionicons
          style={styles.chevronForward}
          name={"ios-chevron-forward"}
          size={36}
          color={theme.colors.lightGray}
        />
        <Text style={styles.titleTextPrimary}>Frutas</Text>
      </View>
      <Text style={styles.titleSupplyer}>
        Escolha as frutas que esse fornecedor nos fornece
      </Text>
      <ScrollView>
        <CheckBoxSupplyerFruits onChange={styles.titleSupplyer}/>
        <CheckBoxSupplyerFruits onChange={styles.titleSupplyer}/>
        
      </ScrollView>
      <TouchableOpacity
        style={styles.addSupplier}
        onPress={() => navigation.navigate("SupplyerFinish")}
      >
        <Text style={styles.textSupply}>Cadastrar Fornecedor</Text>
      </TouchableOpacity>
    </View>
  );
}
