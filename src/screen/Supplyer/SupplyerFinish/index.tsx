import { useNavigation } from "@react-navigation/native";
import { View, Alert, Image, Text } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styled";
import theme from "../../../global/theme/theme";
import { styled } from "styled-components";

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

export default function SupplyerFinish() {
  const navigation: any = useNavigation();
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
      <Image style ={styles.imageDone}
      source={require("../../../../assets/undraw-confirmed-re-sef-711.png")} />
      <Text style ={styles.titleSupplyer}>
        Fornecedor cadastrado
      </Text>
      <Text style ={styles.titleText}>
        Você cadastrou o fornecedor lorem ipsidnf com sucesso !
      </Text>      
      <TouchableOpacity
        style={styles.addSupplier}
        onPress={() => navigation.navigate('SupplyerList')}
        
      >
        <Text style={styles.textSupply}>Voltar ao início</Text>
      </TouchableOpacity>
    </View>
  );
}
