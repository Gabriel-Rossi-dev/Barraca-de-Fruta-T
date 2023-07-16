import { View, Text } from "react-native";
import { styles } from "./styled";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import theme from "../../../global/theme/theme";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";

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

export default function SupplyerCPF() {
  const [cpfSupply, setcpfSupply] = useState("");
  async function handleCpfState() {
    await AsyncStorage.setItem("cpfSupply", cpfSupply);
  }
  const navigation: any = useNavigation();

  async function getNameSupply() {
    const nameValue = await AsyncStorage.getItem("nameSupply");
  }
  function verifyIfIsFilled() {
    if (cpfSupply.length < 11 || cpfSupply.length >11) {
      Alert.alert("CPF inválido", "Preencha o cpf do fornecedor");
    } else navigation.navigate("SupplyerPhone");
  }
  getNameSupply();
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
        <Text style={styles.titleTextSecond}>CPF</Text>
      </View>

      <Text style={styles.titleSupplyer}>Digite o CPF do colaborador</Text>
      <TextInput
        onChangeText={(text: any) => setcpfSupply(text)}
        style={styles.InputText}
        placeholder="000.000.000-00"
        placeholderTextColor={theme.colors.lightGray}
        keyboardType="numeric"
      />
      <TouchableOpacity
        style={styles.buttonNext}
        onPress={() => {
          verifyIfIsFilled();
          handleCpfState();
        }}
      >
        <Text style={styles.buttonText}>Próximo</Text>
        <Ionicons
          style={styles.chevronForwardPrimary}
          name={"ios-chevron-forward"}
          size={36}
          color={theme.colors.lightGray}
        />
      </TouchableOpacity>
    </View>
  );
}
