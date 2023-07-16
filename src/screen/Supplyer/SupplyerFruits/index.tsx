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
import { useEffect, useState } from "react";

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
  const [nameValue, setNameValue] = useState("");
  const [cpfValue, setCpfValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [listSupplyer, setListSupplyer] = useState([]);
  const [fruitSupply, setFruitSupply] = useState("");
  const [listFruit, setListFruit] = useState([
    { name: "Banana", isSelected: false },
    { name: "Maça", isSelected: false },
    { name: "Laranja", isSelected: false },
    { name: "Abacaxi", isSelected: false },
    { name: "Morango", isSelected: false },
    { name: "Uva", isSelected: false },
    { name: "Pera", isSelected: false },
    { name: "Kiwi", isSelected: false },
    { name: "Melancia", isSelected: false },
  ]);

  const navigation: any = useNavigation();

  useEffect(() => {
    async function getSupplyerData() {
      const name = await AsyncStorage.getItem("nameSupply");
      const cpf = await AsyncStorage.getItem("cpfSupply");
      const phone = await AsyncStorage.getItem("phoneSupply");

      setNameValue(name || "");
      setCpfValue(cpf || "");
      setPhoneValue(phone || "");

      const supplyerData = await AsyncStorage.getItem("listSupplyer");
      setListSupplyer(supplyerData ? JSON.parse(supplyerData) : []);
    }
    getSupplyerData();
  }, []);

  async function handleFinish() {
    const filterlistFruit = listFruit.filter((item) => item.isSelected);
    const supplyer = {
      name: nameValue,
      cpf: cpfValue,
      phone: phoneValue,
      fruits: filterlistFruit,
    };
    setListSupplyer((prevList) => [...prevList, supplyer]);

    await AsyncStorage.setItem("listSupplyer", JSON.stringify(listSupplyer));
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
        renderItem={({ item, index }) => (
          <View style={styles.viewRow}>
            <TouchableOpacity
              onPress={() => {
                setListFruit((prevState) => {
                  const newListFruit = [...prevState];
                  newListFruit[index] = {
                    ...newListFruit[index],
                    isSelected: !newListFruit[index].isSelected,
                  };
                  return newListFruit;
                });
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
          navigation.navigate("SupplyerFinish", nameValue, listSupplyer);
        }}
      >
        <Text style={styles.textSupply}>Cadastrar Fornecedor</Text>
      </TouchableOpacity>
    </View>
  );
}
