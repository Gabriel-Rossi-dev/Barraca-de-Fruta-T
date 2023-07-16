import { View, Text, Alert } from "react-native";
import { styles } from "./styled";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import theme from "../../../global/theme/theme";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
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

export default function SupplyerName() {
  const navigation: any = useNavigation();
  const [nameSupply, setnameSupply] = useState("");

  async function handleNameState() {
    await AsyncStorage.setItem("nameSupply", nameSupply);
  }
  function verifyIfIsFilled() {
    if (nameSupply != "") {
      navigation.navigate("SupplyerCPF");
    } else Alert.alert("Nome vazio", "Preencha o nome do fornecedor");
  }

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
      <Text style={styles.titleText}>Nome</Text>
      <Text style={styles.titleSupplyer}>Digite o nome do colaborador</Text>
      <TextInput
        onChangeText={(text: any) => setnameSupply(text)}
        style={styles.InputText}
        placeholder="Nome"
        placeholderTextColor={theme.colors.lightGray}
      />
      <TouchableOpacity
        style={styles.buttonNext}
        onPress={() => {
          handleNameState();
          verifyIfIsFilled();
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
