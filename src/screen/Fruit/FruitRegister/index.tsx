import { styles } from "./styled";
import { Ionicons } from "@expo/vector-icons";
import theme from "../../../global/theme/theme";
import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View, Alert } from "react-native";
import CardElevation from "../../../constants/CardElevationInput/CardElevationInput";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
  const [nameFruit, setnameFruit] = useState("");
  const [priceWeight, setpriceWeight] = useState("");
  const [amount, setamount] = useState("");
  const [nameSupply, setnameSupply] = useState("");
  const [fruitInfo, setFruitInfo] = useState<
    {
      nameFruit: string;
      priceWeight: string;
      amount: string;
      nameSupply: string;
    }[]
  >([]);

  useEffect(() => {
    async function getFruitsData() {
      const nameFruit = await AsyncStorage.getItem("nameFruit");
      const priceWeight = await AsyncStorage.getItem("priceWeight");
      const amount = await AsyncStorage.getItem("amount");
      const nameSupply = await AsyncStorage.getItem("nameSupply");

      setnameFruit(nameFruit || "");
      setpriceWeight(priceWeight || "");
      setamount(amount || "");
      setnameSupply(nameSupply || "");

      const supplyerData = await AsyncStorage.getItem("fruitInfo");
      setFruitInfo(supplyerData ? JSON.parse(supplyerData) : []);
    }
    getFruitsData();
  }, []);

  async function handleFinish() {
    const fruitObj = {
      nameFruit: nameFruit,
      priceWeight: priceWeight,
      amount: amount,
      nameSupply: nameSupply,
    };
    setFruitInfo((prevList) => [...prevList, fruitObj]);

    await AsyncStorage.setItem(
      "fruitInfo",
      JSON.stringify([...fruitInfo, fruitObj])
    );

    const supplyerInfo = await AsyncStorage.getItem("fruitInfo");
    console.log("SUPPLYER INFO", supplyerInfo);
    const testeList = JSON.stringify(fruitInfo);
    setFruitInfo(JSON.parse(testeList));
  }

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
      <CardElevation
        nameIcon={"nutrition-outline"}
        placeholderText="Nome da fruta"
        onChange={(nameFruit: string) => setnameFruit(nameFruit)}
      />
      <CardElevation
        nameIcon={"cash-outline"}
        placeholderText="Preço do Kilo"
        keyboardType={"number-pad"}
        onChange={(price: any) => setpriceWeight(price)}
      />
      <CardElevation
        nameIcon={"server-outline"}
        placeholderText="Quantidade no estoque"
        onChange={(amount: any) => setamount(amount)}
      />
      <CardElevation
        nameIcon={"people-outline"}
        placeholderText="Fornecedor"
        onChange={(nameSupply: any) => setnameSupply(nameSupply)}
      />
      <TouchableOpacity
        style={styles.addSupplier}
        onPress={() => [navigation.navigate("FruitList"), handleFinish()]}
      >
        <Text style={styles.textSupply}>Cadastrar Fruta</Text>
      </TouchableOpacity>
    </View>
  );
}
