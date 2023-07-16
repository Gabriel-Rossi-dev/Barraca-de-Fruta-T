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
import { Item } from "react-native-paper/lib/typescript/src/components/Drawer/Drawer";
import Checkbox from "expo-checkbox";

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

export default function SupplyerFruits() {
  let nameValue: string;
  let cpfValue: string;
  let phoneValue: string;
  let listSupplyer: any = [];
  let supplyerList;

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

  async function handleNameState() {
    const [fruitSupply, setfruitSupply] = useState("");
    await AsyncStorage.setItem("fruitSupply", fruitSupply);
  }

  async function getSupplyerData() {
    nameValue = await AsyncStorage.getItem("nameSupply");
    cpfValue = await AsyncStorage.getItem("cpfSupply");
    phoneValue = await AsyncStorage.getItem("phoneSupply");
    supplyerList = await AsyncStorage.getItem("listSupplyer");
    console.log(nameValue);
    console.log(cpfValue);
    console.log(phoneValue);
  }

  async function handleFinish() {
    let filterlistFruit = listFruit.filter((item) => item.isSelected == true);
    listSupplyer = (await AsyncStorage.getItem("listSupplyer"))
      ? await AsyncStorage.getItem("listSupplyer")
      : [];
    const supplyer = {
      name: nameValue,
      cpf: cpfValue,
      phone: phoneValue,
      fruits: filterlistFruit,
    };
    console.log("---------------->", JSON.stringify(supplyer));
    listSupplyer.push(supplyer);
    await AsyncStorage.setItem("listSupplyer", listSupplyer);
    console.log(`{}{}{}{}{} ${listSupplyer}`);
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

      <FlatList
        data={listFruit}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.viewRow}>
            <TouchableOpacity
              onPress={() => {
                item.isSelected = !item.isSelected;

                console.log(item.isSelected);
              }}
              style={
                item.isSelected
                  ? styles.allFruitsRetangleSelected
                  : styles.allFruitsRetangle
              }
            ></TouchableOpacity>
            <Text style={styles.textFruitsList}>{item.name}</Text>
          </View>
        )}
      ></FlatList>

      <TouchableOpacity
        style={styles.addSupplier}
        onPress={() => {
          handleFinish();
          navigation.navigate("SupplyerFinish", nameValue, supplyer);
        }}
      >
        <Text style={styles.textSupply}>Cadastrar Fornecedor</Text>
      </TouchableOpacity>
    </View>
  );
}
