import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styled";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

export default function FruitHome() {
  const navigation: any = useNavigation();
  return (
    <View>
      <View style={styles.viewText}>
        <Text style={styles.textHome}>Cadastre sua primeira fruta</Text>
      </View>
      <TouchableOpacity
        style={styles.addSupplier}
        onPress={() => navigation.navigate("FruitRegister")}
      >
        <Text style={styles.textAdd}>+</Text>
        <Text style={styles.textSupply}>Cadastrar Fruta</Text>
      </TouchableOpacity>
    </View>
  );
}
