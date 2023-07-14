import { View, Text, Alert } from "react-native";
import { styles } from "./styled";
import {
  FlatList,
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
  

  let nameValue;
  let cpfValue;
  let phoneValue;

  async function handleNameState() {
    const [fruitSupply, setfruitSupply] = useState("");
    await AsyncStorage.setItem("fruitSupply", fruitSupply);
  }

  async function getSupplyerData() {
    nameValue = await AsyncStorage.getItem("nameSupply");
    cpfValue = await AsyncStorage.getItem("cpfSupply");
    phoneValue = await AsyncStorage.getItem("phoneSupply");

    // console.log(nameValue);
    // console.log(cpfValue);
    // console.log(phoneValue);
  }

  async function handleFinish() {
    let filterlistFruit = listFruit.filter((item) => item.isSelected == true);
    let listSupplyer = await AsyncStorage.getItem('listSupplyer')
    const supplyer = {
      name: nameValue,
      cpf: cpfValue,
      phone: phoneValue,
      fruits: filterlistFruit,
    };
    listSupplyer.push(supplyer)
    await AsyncStorage.setItem("listSupplyer", listSupplyer);
    console.log('---------------->', JSON.stringify(supplyer))
    setfruitSupply(listFruit)
  }
  const navigation: any = useNavigation();

  let listFruit = [
    { name: "Banana", isSelected: false },
    { name: "Maça", isSelected: false },
    { name: "Laranja", isSelected: false },
    { name: "Abacaxi", isSelected: false },
    { name: "Morango", isSelected: false },
    { name: "Uva", isSelected: false },
    { name: "Pera", isSelected: false },
    { name: "Kiwi", isSelected: false },
    { name: "Melancia", isSelected: false },
  ];

  
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

      <FlatList
        data={listFruit}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <CheckBoxSupplyerFruits
            key={item.name}
            style={item.isSelected ? styles.selectedButton : undefined}
            onPress={() => {
              item.isSelected = !item.isSelected;
              console.log("item ---------------------->", item);
            }}
            name={item.name}
          />
        )}
      ></FlatList>

      <TouchableOpacity
        style={styles.addSupplier}
        // onPress={() => navigation.navigate("SupplyerFinish")}
        onPress={() => handleFinish()}
      >
        <Text style={styles.textSupply}>Cadastrar Fornecedor</Text>
      </TouchableOpacity>
    </View>
  );
}
